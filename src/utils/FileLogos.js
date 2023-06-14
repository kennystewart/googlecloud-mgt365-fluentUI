const resolveAsset = (asset) => {
    const ASSET_URL =
      "/filetypes/";
    return `${ASSET_URL}${asset}`;
};

export  const excelLogo = resolveAsset("excel.png");
export  const wordLogo = resolveAsset("word.png");
export  const jpgLogo = resolveAsset("jpg.png");
export  const powerpointLogoURL = resolveAsset("powerpoint.svg");
export  const pngLogo = resolveAsset("png.png");
<<<<<<< HEAD

export const getThumbnail = (file) => {
    if (file?.folder) {
      return "https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types/48/folder.svg";
    } else if (file?.file) {
      const imagetype = getFileType(file.file.mimeType);
      return `https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types/48/${imagetype}.svg`;
    } else if (file.package.type === "oneNote") {
      return "https://modernb.akamai.odsp.cdn.office.net/files/fabric-cdn-prod_20211025.001/assets/item-types/20/onetoc.svg";
    }
  };
=======
  
export const getThumbnail = (file) => {
if (file?.folder) {
    return "/filetypes/folder.png";
    } else if (file?.file) {
    const imagetype = getFileType(file.file.mimeType);
    return `/filetypes/${imagetype}.png`;
    } else if (file.package.type === "oneNote") {
    return "/filetypes/text.png";
    } else {
        return "/filetypes/general.png"
    }
};
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751

export  const getFileType = (type) => {
    const filetypes = {
    "image/jpeg": "photo",
    "image/jpg": "photo",
    "text/plain": "txt",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        "docx",
    "image/png": "photo",
    "application/pdf": "pdf",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        "xlsx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        "xlsx",
    "application/zip": "zip",
    "text/xml": "xml",
    "text/html": "html",
    "application/x-msdownload": "exe",
    "video/mp4": "video",
    "audio/mpeg": "audio",
    };
    const imgtype = filetypes[type] ?? "genericfile";
    return imgtype;
<<<<<<< HEAD
};

export const getFileTypeFromName = (name) => {
    const type = name.split('.')[1];
    return type;
}

export const getPreviewType = (name) => {
    const type = getFileTypeFromName(name);
    const previewtypes = {
        "jpeg": "photo",
        "jpg": "photo",
        "docx": "docx",
        "png": "photo",
        "pdf": "docx",
        "xlsx": "docx",
        "csv": "docx",
        "html": "docx",
        "html": "docx",
        "txt": "docx",
        "md": "docx",
        "mp4": "video",
        "avi": "video",
        "mp3": "audio",
        "exe":"exe",
        "zip":"zip",
        "rar":"zip"
        };
    const result = previewtypes[type] ?? "genericfile";
    // if (result == null || result == '') return "genericfile";
    return result;
}
=======
};
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
