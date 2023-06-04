import React from 'react';
import { getFileType, getFileTypeFromName, getPreviewType } from '../../../utils/FileLogos';
import { DocPreview } from './drivers/DocPreview';
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
        {file?.webUrl && (fileType == "audio") && 
            <audio controls>
                <source src={file.webUrl} />
            </audio>
        }
        {file?.webUrl && (fileType == "genericfile") &&
            <Image src={"/filetypes/" + "unknown.png"} width="100%" height="100px" />
        }
        {file?.webUrl && (fileType != "genericfile" && fileType != "docx" && fileType != "photo" && fileType != "video" ) &&
            <Image src={`https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types/48/${fileType}.svg`} height="50px" />
        }
    </>
  );
}