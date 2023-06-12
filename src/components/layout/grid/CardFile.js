import {
    makeStyles,
    shorthands,
    Button,
    Caption1,
    Body1,
    Card,
    CardHeader,
    CardFooter,

    Toolbar,
    ToolbarButton,
    Menu,
    MenuTrigger,
    MenuPopover,
    MenuList,
    MenuItem,
    Link,
  } from "@fluentui/react-components";
  import * as React from "react";
  import {saveAs} from "file-saver";
  import {
    Open16Regular,
    ArrowDownload16Regular,
    MoreHorizontal24Filled
  } from "@fluentui/react-icons";
  import { getThumbnail} from "../../../utils/FileLogos";
import FilePreviewer from "./FilePreviewer";
import { FileDownloadAsset } from "../table/TableDatas";

import {} from '@fluentui/react-icons'
import OpenDialogImage from "./drivers/DialogViewer";
import { downloadFile } from "../../../utils/SPFileManager";
  const useStyles = makeStyles({
  
    description: {
      ...shorthands.margin("12px", 0, "12px"),
    },
  
    card: {
      width: "380px",
      height: "380px",
      marginTop:"10px",
      marginLeft: "6px"
    },

    text: {
      ...shorthands.margin(0),
    },
  });
  

export  const CardFile = (props) => {
    const styles = useStyles();
    let {file} = props;
    const FileLog = getThumbnail(file);
    const openFile = (e) => {
      e.preventDefault();

      debugger;
      saveAs(
        file?.webUrl,
        file?.name
      );
    }



    return (
        <Card className={styles.card} {...props}>

        <FilePreviewer file={file} />
        <CardHeader
          image={
            <img src={FileLog} width="25px" height="25px"/>
          }
          header={
            <Body1>
              <b>{file.name}</b>
            </Body1>
          }
          description={<Caption1>Developer</Caption1>}
          action={
            <Toolbar aria-label="Default" {...props}>
              <Menu>
                <MenuTrigger>
                  <ToolbarButton aria-label="More" icon={<MoreHorizontal24Filled />} />
                </MenuTrigger>
                <MenuPopover>
                  <MenuList>
                    <MenuItem onClick={(e)=>openFile(e)}>                      
                          {/* <img src={downloadImage} alt="download" width={20} /> */}
                          Open
                    </MenuItem>
                    <MenuItem onClick={(e) => downloadFile(file["@microsoft.graph.downloadUrl"])}>
                        Download
                    </MenuItem>
                    <MenuItem>Upload</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            </Toolbar>
          }
        />
  
        <CardFooter>
              <OpenDialogImage file={file} />
              <Button icon={<ArrowDownload16Regular />} onClick={(e) => downloadFile(file["@microsoft.graph.downloadUrl"])}>
                  Download
              </Button>
            
        </CardFooter>
      </Card>
    );
  };
 