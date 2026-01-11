'use server'
// TODO: ACCORDING TO THE LATEST DOCS, THIS MAY NEED TO BE DELETED

import { draftMode } from 'next/headers'

export async function disableDraftMode() {
  const { disable } = await draftMode();
  const delay = new Promise((resolve) => setTimeout(resolve, 1000))

  await Promise.allSettled([disable, delay]);
}