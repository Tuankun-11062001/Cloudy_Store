import { Noto_Sans_JP } from "next/font/google";
import "@/sass/global.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
const SansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "Cloudy melody",
  description: "Cloudy melody T-shirt Design",
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <head></head>
      <body className={SansJP.className}>
        <div>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            {/* <Footer /> */}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
