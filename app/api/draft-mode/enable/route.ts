// ./src/app/api/draft-mode/enable/route.ts

import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { client } from "@/sanity/sanity-utils";
import { defineEnableDraftMode } from "next-sanity/draft-mode"
import { token } from "@/sanity/lib/token";

const clientWithToken = client.withConfig({ token });

// export async function GET(request: NextRequest) {
//   if (!process.env.SANITY_API_READ_TOKEN) {
//     return new Response("Missing environment variable SANITY_API_READ_TOKEN", {
//       status: 500,
//     });
//   }

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: token
  }),
});