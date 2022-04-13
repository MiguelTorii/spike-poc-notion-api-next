import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import GridItem from "components/GridItem";
import GridLayout from "components/GridLayout";

import styles from "./ComponentsPageStyles";
import ListLayout from "components/ListLayout";
import ListItem from "components/ListItem";

const ComponentsPage = ({ page }) => (
  <Box sx={styles.root}>
    <Container>
      <Box mt={3} />
      <GridLayout>
        <GridItem
          title={page.title}
          description={page.description}
          icon={page.icon}
          media={page.media}
          url={page.url}
          permission="Admin Only"
        />
        <GridItem
          title={page.title}
          description="This is a  hardcoded short description of the page"
          icon={page.icon}
          media={page.media}
          url={page.url}
          permission="Admin Only"
        />
        <GridItem
          title={page.title}
          description={page.description}
          icon={page.icon}
          media={page.media}
          url={page.url}
          permission="Admin Only"
        />
      </GridLayout>

      <Box
        sx={{
          border: (theme) => `2px solid ${theme.palette.lightBlack}`,
        }}
        my={2}
      />

      <ListLayout>
        <ListItem
          title={page.title}
          description={page.description}
          icon={page.icon}
          media={page.media}
          url={page.url}
        />
        <ListItem
          title={page.title}
          description="This is a  hardcoded short description of the page"
          icon={page.icon}
          media={page.media}
          url={page.url}
        />
        <ListItem
          title={page.title}
          description={page.description}
          icon={page.icon}
          media={page.media}
          url={page.url}
        />
      </ListLayout>
    </Container>
  </Box>
);

ComponentsPage.propTypes = {};

export default ComponentsPage;
