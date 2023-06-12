import { Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Image } from "@fluentui/react-components";
import { Dismiss24Regular, Open16Regular } from "@fluentui/react-icons";
import FilePreviewer from "../FilePreviewer";
import { DocPreview } from "./DocPreview";
import { getPreviewType } from "../../../../utils/FileLogos";

export default function OpenDialogImage(props) {
  const file = props.file;
  const fileType = getPreviewType(file?.name);
  return (
    <>
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button icon={<Open16Regular />} iconPosition="before">Open</Button>
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle
            action={
              <DialogTrigger action="close">
                <Button
                  appearance="subtle"
                  aria-label="close"
                  icon={<Dismiss24Regular />}
                />
              </DialogTrigger>
            }
          >
            Dialog title
          </DialogTitle>
          <DialogContent>
            {/* <Image src={props.url} width="500px" height="600px" fit="contain"/> */}
            {file?.webUrl && (fileType == "docx") && 
            <DocPreview file={file}/>
            }
        {file?.webUrl && (fileType =="photo") && 
            <Image src={file.webUrl} height="500px" width="600px" fit='cover'/>
        }
        {file?.webUrl && (fileType == "video") && 
            <video src={file.webUrl} height="500px" />
        }
        {file?.webUrl && (fileType == "audio") && 
            <audio controls width="100%">
                <source src={file.webUrl} />
            </audio>
        }
        {file?.webUrl && (fileType == "genericfile") &&
            <Image src={"/filetypes/" + "unknown.png"} width="500px" height="400px" fit="cover"/>
        }
        {file?.webUrl && (fileType != "genericfile" && fileType != "docx" && fileType != "photo" && fileType != "video" ) &&
            <Image src={`https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types/48/${fileType}.svg`} height="50px" />
        }
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  </>);
}