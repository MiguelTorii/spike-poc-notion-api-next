import PropTypes from "prop-types";
import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import TextLink from "components/TextLink";

import { getIcon } from "utils/medium";

import styles from "./ListItemStyles";

const ListItem = ({ title, description, media, url, icon, permission }) => (
  <Grid item xs={12}>
    <Box sx={styles.listItem}>
      <Box sx={styles.imageContainer}>
        <Image
          src={media}
          alt={`media for ${title}`}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "3px" }}
        />
      </Box>
      <Box ml={1.75}>
        <Typography variant="subtitle1">{title}</Typography>
        <Box mt={1.5} />
        <Typography>{description}</Typography>
        <Box my={1.5} display="flex" alignItems="center">
          <Box>{getIcon(icon)}</Box>
          <TextLink href={url} />
        </Box>
      </Box>
    </Box>
  </Grid>
);

ListItem.propTypes = {};

export default ListItem;
