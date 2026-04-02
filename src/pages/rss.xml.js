import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config/site";

export async function GET() {
  const posts = await getCollection("posts");
  const sorted = posts.sort(
    (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
  );
  return rss({
    title: `${SITE.name} | Care tips`,
    description: SITE.description,
    site: SITE.siteUrl,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
