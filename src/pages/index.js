import { Client } from "@notionhq/client";

import ComponentsPage from "components/ComponentsPage";

export default ComponentsPage;

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  const pageId = "f11bce1c-a314-40a4-aee7-d322aff5ee1e";

  const page = await notion.pages.retrieve({ page_id: pageId });

  const blocks = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });

  const descriptionBlock = blocks.results.find((block) => block.paragraph);

  const propPage = {
    title: page?.properties.title.title[0].plain_text,
    description: descriptionBlock.paragraph.rich_text[0]?.plain_text,
    icon: page.icon,
    url: page.url,
    media: page?.cover?.external?.url,
  };

  return { props: { page: propPage }, revalidate: 60 };
}
