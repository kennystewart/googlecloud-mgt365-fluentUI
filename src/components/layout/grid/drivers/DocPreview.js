import React, { useState } from "react";
// import { Logger } from "logging-library";
import { CustomErrorComponent } from "custom-error";
// import { FileDownloadAsset } from "../../table/TableDatas";
import { getFileTypeFromName } from "../../../../utils/FileLogos";
import FileViewer from 'react-file-viewer'
import { useContext } from "react";
import { useEffect } from "react";
// import { OBJModel } from "react-3d-viewer";

// const file = "/preview/1.txt"; *********8
// const type = "txt";
// const file = "/preview/1.wexbim";
// const type = "wexbim";
// const file = "http://localhost:3000/preview/1.obj";
// const type = "obj";

// const file = "/preview/1.png"; oooo
// const type = "png";
// const file = "/preview/360photo.jpg";ooo
// const type = "jpg";
// const file = "/preview/1.pdf";   oooo
// const type = "pdf";
// const file = "/preview/1.xlsx";*************************
// const type = "xlsx";
// const file = "/preview/1.docx"; OOOOOOOOOO
// const type = "docx";
// const file = "/preview/1.csv"; 
// const type = "csv";

export const DocPreview = (props) => { 
  const file = props?.file;
  const type = getFileTypeFromName(file?.name);
  const [path, setPath] = useState('');
  // const {file, type} = props;
  const onError = (e) => {
    console.log(e);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const parentUrl = "https://walrus-app-v3k99.ondigitalocean.app/proxy/63e4ce5542771d5254e2525c/v1.0/drives/b!u437h9hN5kKKuYv4KxMZ9edZk038P2JOh0O-CbQrkFl3rjkpSNnESL7EuydJmf86/items/";
        const response = await fetch(parentUrl + file.id + "/preview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await response.json();
        setPath(data.getUrl);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [file.id]);

  return (
    <>
        <iframe src={path} title="your file preview" width='100%' height='700px' scrolling="no" frameBorder='0' >
        </iframe>

        {/* <FileViewer
            fileType={type}
            filePath={path}
            errorComponent={CustomErrorComponent}
            onError={onError}
          /> */}
      {/* {(type == "glb" || type == "obj" || type == "fbx" ||type == "mtl" || type == "blend") && <OBJModel
        height="300px"
        position={{ x: 0, y: -2.5, z: 0 }}
        scale={{ x: 0.25, y: 0.25, z: 0.25 }}
        src={file}
        width="350px"
      />} */}
      {/* <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={onError}
      /> */}
      {/* <iframe src={file}
        width="355px"
        height="180px"
        scrolling={false}

        frameBorder="0">
      </iframe> */}
      </>
  );
};