import React, { useState } from "react";
// import { Logger } from "logging-library";
import { CustomErrorComponent } from "custom-error";
// import { FileDownloadAsset } from "../../table/TableDatas";
import { getFileTypeFromName } from "../../../../utils/FileLogos";
import FileViewer from 'react-file-viewer'
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
  // const {file, type} = props;
  const onError = (e) => {
    console.log(e);
  };
  
  const url = file?.webUrl.replace(

  )
  return (
    <>
        <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${file.webUrl}`} title="your file preview" width='360px' height='180px' frameBorder='0'>
        </iframe>
        {/* <FileViewer
            fileType={type}
            filePath={file?.webUrl}
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