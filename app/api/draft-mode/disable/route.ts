// import { draftMode } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export function GET(request: NextRequest) {
//   draftMode().disable();
//   return NextResponse.redirect(new URL("/", request.url));
// }

'use server'

import { draftMode } from 'next/headers'

export async function disableDraftMode() {
  const { disable } = await draftMode();
  const delay = new Promise((resolve) => setTimeout(resolve, 1000))

  await Promise.allSettled([disable, delay]);
}