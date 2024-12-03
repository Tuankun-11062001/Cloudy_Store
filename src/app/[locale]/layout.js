import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/sass/global.scss";
import Header from "@/components/header/header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Suspense } from "react";
import { AdsBottom, AdsPopup } from "@/components/ads/ads";

export const metadata = {
  title: "Cloudy melody",
  description: "Cloudy melody T-shirt Design",
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head></head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="app_content">{children}</div>

          <Suspense>
            <AdsBottom />
            <AdsPopup />
          </Suspense>

          <Analytics />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
