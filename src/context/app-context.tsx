import { ThemeContextProvider } from "@/context/theme-context";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages} from 'next-intl/server';
import { LayoutContextProvider } from "./layout-context";

export default async function AppProvider(
  { children }: { children: React.ReactNode }
) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <ThemeContextProvider>
          <LayoutContextProvider>
            {children}
          </LayoutContextProvider>
        </ThemeContextProvider>
      </NextIntlClientProvider>
    </>
  );
}
