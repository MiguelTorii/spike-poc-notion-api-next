/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import { Client } from "@notionhq/client";

export default function Home({ page, description }) {
  console.log("Page data:", page);
  console.log("DescriptionBlock Data: ", description);

  const renderIcon = () => {
    if (page.icon.type === "emoji") {
      return <div>{page.icon.emoji}</div>;
    }
    if (page.icon.type === "file") {
      return (
        <img className={styles.icon} src={page.icon.file.url} alt="favicon" />
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>{page?.properties.title.title[0].plain_text}</h3>
        <p>{description.paragraph.rich_text[0]?.plain_text}</p>
        <div className={styles.mainMedia}>
          <img src={page?.cover?.external?.url} alt="main media" />
        </div>
        <div className={styles.shareContainer}>
          {renderIcon()}
          <a href={page?.url}>url</a>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const pageId = "f11bce1c-a314-40a4-aee7-d322aff5ee1e";
  const blockId = "f11bce1c-a314-40a4-aee7-d322aff5ee1e";

  const page = await notion.pages.retrieve({ page_id: pageId });

  const blocks = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });

  const description = blocks.results.find((block) => block.paragraph);

  return { props: { page: page, description: description } };
}
