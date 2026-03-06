import { client } from "@/sanity/sanity-utils"
import { defineEnableDraftMode } from "next-sanity/draft-mode"
// import { token } from "@/sanity/lib/token";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  }),
});