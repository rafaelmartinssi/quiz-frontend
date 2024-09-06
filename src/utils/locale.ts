'use server';

import { cookies } from "next/headers";

const defaultLocale = 'pt';
const cookieName = 'locale';

export async function getUserLocale() {
  return cookies().get(cookieName)?.value || defaultLocale;
}

export async function setUserLocale(locale: string) {
  cookies().set(cookieName, locale);
}
