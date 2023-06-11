// GridLayout: grid view with files previewer
// author: dancing
// created_at: 5/25/2023

import { makeStyles, shorthands, Button, Image } from "@fluentui/react-components";
import { CardFile } from "./CardFile";
import {
    useStaticVirtualizerMeasure,
  } from "@fluentui/react-components/unstable";
import "../../../App.css"
import { DirectoryPreview } from "./Directory";
import { Col, Row } from "fluentui-react-grid";
  // custom styles
const useStyles = makeStyles({

  container: {
      ...shorthands.gap("12px"),
      flexDirection: "row",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
      paddingBottom:"10px"
    },
    child: {
      lineHeight: "20px",
      height: "fit-content",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      backgroundColor: "#2196F3",
      padding: "10px",
    },
    gridItem: {
      border: "1px solid rgba(0, 0, 0, 0.8)",
      padding: "20px",
      fontSize: "30px",
      textAlign: "center"
    }
});
  
export const GridLayout = (props) => {
  const styles = useStyles();
  
  const {fileData, handleItemClick, NextLink, loading,GetData, saerchResult} = props;
  const { scrollRef } =
  useStaticVirtualizerMeasure({
    defaultItemSize: 200,
  });
  const directories = fileData.filter(file=> !file?.["@microsoft.graph.downloadUrl"]);
  const files = fileData.filter(file => file?.["@microsoft.graph.downloadUrl"]);
  const style = useStyles();
  return (
    <>  
          <div className={styles.gridContainer}>
          { directories.length > 0 && directories.map((dir, index) => (

            <div className={styles.gridItem} key={`directory${index}`}>
              <DirectoryPreview _onClick={handleItemClick} dir={dir}/>
            </div>
          ))}
          </div>
          <div className={styles.gridContainer}>
          {files.length > 0 && files.map((file, index) =>
            <div className={styles.gridItem} key={`file${index}`}>
              <CardFile file={file}/>
            </div>
            )}
          </div>
          
            {NextLink
              ? !loading && (
                <Button onClick={GetData}>
                  Load more
                </Button>
                )
              : null}
          
    {/* </div> */}
  </>);
};