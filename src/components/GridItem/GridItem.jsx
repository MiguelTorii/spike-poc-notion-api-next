import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { getIcon } from "utils/medium";

import TextLink from "components/TextLink";

import styles from "./GridItemStyles";
import Image from "next/image";

const GridItem = ({ title, description, media, url, icon, permission }) => (
  <Grid item sm={4}>
    <Box sx={styles.gridItem}>
      <Typography variant="subtitle1">{title}</Typography>
      <Box mt={1.5} />
      <Typography sx={styles.description}>{description}</Typography>
      <Box flex={1} />
      <Box my={1.5} display="flex" alignItems="center">
        <Box>{getIcon(icon)}</Box>
        <TextLink href={url} />
      </Box>
      <Box sx={styles.imageContainer}>
        <Image
          src={media}
          alt={`media for ${title}`}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "3px" }}
        />
      </Box>
      <Box sx={styles.tag}>{permission}</Box>
    </Box>
  </Grid>
);

GridItem.propTypes = {};

export default GridItem;
