import { Button, Dialog, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Image } from "@fluentui/react-components";
import { Dismiss24Regular, Open16Regular } from "@fluentui/react-icons";

export default function OpenDialogImage(props) {

    console.log(props.url)
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
            <Image src={props.url} width="500px" height="600px" fit="cover"/>
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
    </>);
}