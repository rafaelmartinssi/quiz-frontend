import "./globals.css";

import AppLayout from "@/components/layout/app-layout";
import AppProvider from "@/context/app-context";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AppProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
