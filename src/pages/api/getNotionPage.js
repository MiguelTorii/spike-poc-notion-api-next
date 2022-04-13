const { Client } = require("@notionhq/client");

export default function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  (async () => {
    const pageId = "f11bce1c-a314-40a4-aee7-d322aff5ee1e";
    const response = await notion.pages.retrieve({ page_id: pageId });
    res.status(200).json(response);
  })();
}
