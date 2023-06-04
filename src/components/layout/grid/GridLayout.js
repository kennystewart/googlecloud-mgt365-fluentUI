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
});
  
export const GridLayout = (props) => {
  const styles = useStyles();
  
  const {fileData, handleItemClick, NextLink, loading, saerchResult} = props;
  const { scrollRef } =
  useStaticVirtualizerMeasure({
    defaultItemSize: 200,
  });
  const directories = fileData.filter(file=> !file?.["@microsoft.graph.downloadUrl"]);
  const files = fileData.filter(file => file?.["@microsoft.graph.downloadUrl"]);

  return (
    <>  
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
  </>);
};