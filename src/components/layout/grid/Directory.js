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
import { getThumbnail } from "../../../utils/FileLogos";

const resolveAsset = (asset) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";

  return `${ASSET_URL}${asset}`;
};

const flex = {
  ...shorthands.gap("18px"),
  display: "flex",
};

const useStyles = makeStyles({

  card: {
    marginTop:"10px",
    marginLeft: "6px",
    backgroundColor: "#fafafa",
    width: "380px",
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
                src={getThumbnail(dir)}
                alt=""
              />
            }
            header={<Text weight="semibold">{dir.name}</Text>}
          />
        </Card>

  );
};
