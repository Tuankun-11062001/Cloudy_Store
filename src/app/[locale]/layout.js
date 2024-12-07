import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/sass/global.scss";
import Header from "@/components/header/header";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Suspense } from "react";
import { AdsBottom, AdsPopup } from "@/components/ads/ads";
import Adsence from "../../../components/adsence";
import GoogleAnalytic from "../../../components/googleAnalytic";
import GoogleConsole from "../../../components/googleConsole";

export const metadata = {
  title: "Cloudy Melody",
  description:
    "Cloudy Melody - A blog sharing song lyrics, lyric books, and a music store. Explore translations of songs about life and connect with a community of music lovers.",
  // Phiên bản tiếng Việt
  vi: {
    title: "Cloudy Melody",
    description:
      "Cloudy Melody - Blog chia sẻ lời bài hát, sách lời nhạc và cửa hàng âm nhạc. Khám phá những bản dịch bài hát về cuộc sống và kết nối cộng đồng yêu nhạc.",
  },
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <GoogleAnalytic />
        <GoogleConsole />
        <Adsence pId={process.env.NEXT_PUBLIC_ADSENCE} />
      </head>
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
