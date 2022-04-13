import Typography from "@mui/material/Typography";

import styles from "./TextLinkStyles";

const TextLink = ({ href, label }) => {
  return (
    <Typography sx={styles.link}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {href || label}
      </a>
    </Typography>
  );
};

TextLink.propTypes = {};

export default TextLink;
