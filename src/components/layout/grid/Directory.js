import {
  makeStyles,
  shorthands,
  Button,
  Caption1,
  tokens,
  Checkbox,
  Text,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import * as React from "react";

import { MoreHorizontal20Filled } from "@fluentui/react-icons";
<<<<<<< HEAD
import { getThumbnail } from "../../../utils/FileLogos";
=======
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751

const resolveAsset = (asset) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

const flex = {
<<<<<<< HEAD
  ...shorthands.gap("18px"),
=======
  ...shorthands.gap("16px"),
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
  display: "flex",
};

const useStyles = makeStyles({
<<<<<<< HEAD

  card: {
    marginTop:"10px",
    marginLeft: "6px",
    backgroundColor: "#fafafa",
    width: "380px",
=======
  row: {
    ...flex,
    flexWrap: "wrap",
  },

  card: {
    backgroundColor: "#eeeeee",
    width: "393px",
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
    maxWidth: "100%",
    height: "fit-content",
  },

});

export const DirectoryPreview = ({_onClick, dir}) => {
  const styles = useStyles();
  
  return (

        <Card
          className={styles.card}
          onClick={(e) => _onClick(dir, e)}
        >
          <CardHeader
            image={
              <img
                width="20px"
                height="20px"
<<<<<<< HEAD
                src={getThumbnail(dir)}
=======
                src="/filetypes/folder.png"
>>>>>>> 2900fc4684d68df49bdf488005cabd1e4e58d751
                alt=""
              />
            }
            header={<Text weight="semibold">{dir.name}</Text>}
          />
        </Card>

  );
};
