import React from 'react';
import { getFileType, getFileTypeFromName, getPreviewType } from '../../../utils/FileLogos';
import { DocPreview } from './PreviewFileTypes/DocPreview';
import { Image, makeStyles } from '@fluentui/react-components';

const useStyle = makeStyles({
    cardImage : {
        textAlign: "center",
        maxWidth: "360px",
        maxHeight: "260px"
    }
})
export default function FilePreviewer(props) {
    const styles = useStyle();
    const file = props.file;
    const fileType = getPreviewType(file?.name);
    const type = getFileTypeFromName(file?.name);
    return (
    <>
        {file?.webUrl && (fileType == "docx") && 
            <DocPreview file={file}/>
        }
        {file?.webUrl && (fileType =="photo") && 
        <div className={styles.cardImage}>
            <Image src={file.webUrl} height="260px" width="360px" fit='contain'/>
        </div>
        }
        {file?.webUrl && (fileType == "video") && 
            <video src={file.webUrl} height="180px" />
        }
        {file?.webUrl && (fileType == "genericfile") &&
            <img src={"/filetypes/" + "unknownFile.jpg"} height="180px" />
        }
    </>
  );
}