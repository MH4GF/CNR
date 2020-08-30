import {ContentfulClientApi} from "contentful";

const ContentfulClient: ContentfulClientApi = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export default ContentfulClient