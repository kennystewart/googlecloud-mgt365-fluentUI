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
         ////here is content...
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  </>);
}
