import { Asset, ContentfulClientApi, createClient } from "contentful";
import { Fields, Post } from "../interfaces";

interface IContentfulClient {
  GetPosts: (query?: any) => Promise<Post[]>;
  GetAsset: (id: string) => Promise<Asset>;
}

export default class ContentfulClient implements IContentfulClient {
  private client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: String(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID),
      accessToken: String(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN),
    });
  }

  async GetPosts(query?: any): Promise<Post[]> {
    const entries = await this.client.getEntries<Fields>(query);

    return entries.items.map((entry) => {
      return { sys: entry.sys, fields: entry.fields };
    });
  }

  async GetAsset(id: string): Promise<Asset> {
    const asset = await this.client.getAsset(id);
    return asset;
  }
}
