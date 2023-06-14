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
<<<<<<< HEAD
import { Col, Row } from "fluentui-react-grid";
=======
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
  // custom styles
const useStyles = makeStyles({

  container: {
<<<<<<< HEAD
      ...shorthands.gap("12px"),
=======
      ...shorthands.gap("10px"),
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
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
});
  
export const GridLayout = (props) => {
  const styles = useStyles();
  
<<<<<<< HEAD
  const {fileData, handleItemClick, NextLink, loading, saerchResult} = props;
=======
  const {fileData, handleItemClick} = props;
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
  const { scrollRef } =
  useStaticVirtualizerMeasure({
    defaultItemSize: 200,
  });
  const directories = fileData.filter(file=> !file?.["@microsoft.graph.downloadUrl"]);
  const files = fileData.filter(file => file?.["@microsoft.graph.downloadUrl"]);

  return (
    <>  
<<<<<<< HEAD
          <Row>
          { directories.length > 0 && directories.map((dir, index) => (

            <Col key={`directory${index}`}>
              <DirectoryPreview _onClick={handleItemClick} dir={dir}/>
            </Col>
          ))}
          </Row>
          <Row>
          {files.length > 0 && files.map((file, index) =>
            <Col key={`file${index}`}>
              <CardFile file={file}/>
            </Col>
            )}
          </Row>
          <Row>
            {NextLink
              ? !loading && (
                <Col>
                  Load more
                </Col>
                )
              : null}
          </Row>
    {/* </div> */}
=======

      <div
        aria-label="Grid Previewer"
        className={styles.container}
        role={"list"}
        ref={scrollRef}>
          { directories.length > 0 && directories.map((dir, index) => (
            <span
                role={"listitem"}
                aria-posinset={index}
                aria-setsize={10}
                key={`virtualizer-child-${index}`}
                className={styles.child}
              >
                <DirectoryPreview _onClick={handleItemClick} dir={dir}/>
            </span>
          ))}
          {files.length > 0 && files.map((file, index) =>
            <span
            role={"listitem"}
            aria-posinset={index}
            aria-setsize={10}
            key={`virtualizer-child-${index}`}
            className={styles.child}
            >
              <CardFile file={file}/>
            </span>)}
    </div>
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
  </>);
};