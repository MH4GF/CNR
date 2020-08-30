import { ContentfulClientApi } from "contentful";
import { createClient } from "contentful";

const ContentfulClient: ContentfulClientApi = createClient({
  space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
  accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
});

export default ContentfulClient;
