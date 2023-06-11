import { Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Image } from "@fluentui/react-components";
import { Dismiss24Regular, Open16Regular } from "@fluentui/react-icons";
import { getPreviewType } from "../../../../utils/FileLogos";
import { FileLoading } from "./FileLoading";

export default function OpenDialogViewer(props) {
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
            {file?.webUrl && 
              <FileLoading file={file}/>
            }
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  </>);
}