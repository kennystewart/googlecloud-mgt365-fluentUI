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
<<<<<<< HEAD
    Link,
  } from "@fluentui/react-components";
  import * as React from "react";
  import {saveAs} from "file-saver";
  import {
    Open16Regular,
    ArrowDownload16Regular,
=======
  } from "@fluentui/react-components";
  import * as React from "react";
  
  import {
    Open16Regular,
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
    MoreHorizontal24Filled
  } from "@fluentui/react-icons";
  import { getThumbnail} from "../../../utils/FileLogos";
import FilePreviewer from "./FilePreviewer";
<<<<<<< HEAD
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
=======

  
  const useStyles = makeStyles({
  
    description: {
      ...shorthands.margin(0, 0, "12px"),
    },
  
    card: {
      width: "393px",
      height: "380px",
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
    },

    text: {
      ...shorthands.margin(0),
    },
  });
  

export  const CardFile = (props) => {
    const styles = useStyles();
    let {file} = props;
<<<<<<< HEAD
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
=======
    const logo = getThumbnail(file);
    return (
        <Card className={styles.card} {...props}>
          {/* <img width="326px" height="300px"
            src={file.webUrl}
            alt={file.name}
          /> */}
        {/* <DocPreview /> */}
        <FilePreviewer file={file} />
        <CardHeader
          image={
            <img
                width={30}
                height={30}
              src={logo}
              alt="Microsoft PowerPoint logo"
            />
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
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
<<<<<<< HEAD
                    <MenuItem onClick={(e)=>openFile(e)}>                      
                          {/* <img src={downloadImage} alt="download" width={20} /> */}
                          Open
                    </MenuItem>
                    <MenuItem onClick={(e) => downloadFile(file["@microsoft.graph.downloadUrl"])}>
                        Download
                    </MenuItem>
=======
                    <MenuItem>Open</MenuItem>
                    <MenuItem>Download</MenuItem>
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
                    <MenuItem>Upload</MenuItem>
                  </MenuList>
                </MenuPopover>
              </Menu>
            </Toolbar>
          }
        />
  
        <CardFooter>
<<<<<<< HEAD
              <OpenDialogImage file={file} />
              <Button icon={<ArrowDownload16Regular />} onClick={(e) => downloadFile(file["@microsoft.graph.downloadUrl"])}>
                  Download
              </Button>
            
=======
          <Button appearance="primary" icon={<Open16Regular />}>
            Open
          </Button>
          <Button ><img width={20} height={20} src="/download.png"/> Download</Button>
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
        </CardFooter>
      </Card>
    );
  };
 