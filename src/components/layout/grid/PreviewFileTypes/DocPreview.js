import React, { useState } from "react";
import { Logger } from "logging-library";
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from "custom-error";
import { FileDownloadAsset } from "../../table/TableDatas";

// const file = "/preview/1.avi";
// const type = "avi";
// const file = "/preview/1.jpg";
// const type = "jpg";
// const file = "/preview/1.jpg";
// const type = "jpg";
// const file = "/preview/1.jpg";
// const type = "jpg";
// const file = "/preview/1.pdf";
// const type = "pdf";
// const file = "/preview/1.xlsx";
// const type = "xlsx";
// const file = "/preview/1.docx";
// const type = "docx";
<<<<<<< HEAD
const file = "/preview/1.csv";
const type = "csv";

export const DocPreview = (props) => { 

  // const {file, type} = props;
=======
// const file = "/preview/1.csv";
// const type = "csv";

export const DocPreview = (props) => { 

  const {file, type} = props;
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
  const onError = (e) => {
    console.log(e)
  };
  console.log(file);
  
  return (
    <>
<<<<<<< HEAD
      <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={onError}
      />    
      {/* <iframe src={file.webUrl}
        width="355px"
        height="180px"
        frameBorder="0">
      </iframe> */}
=======
      {/* <FileViewer
        fileType={type}
        filePath={file.webUrl}
        errorComponent={CustomErrorComponent}
        onError={onError}
      />     */}
      <iframe src="https://dwsnow.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc=%7B53DA9ABA-BD2B-41D3-8225-D2D94EA90F02%7D&file=Document.docx&action=default&mobileredirect=true"
        width="326px"
        height="180px"
        frameborder="0">
      </iframe>
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
      </>
  );
};
