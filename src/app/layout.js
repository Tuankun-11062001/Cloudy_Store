import Navigation from "@/components/navigation";
import { Poppins } from "next/font/google";
import "../sass/global.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";
import ProviderStore from "@/redux/provider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Twin",
  description: "Welcome to Twin shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className + " main_layout"}>
        <ProviderStore>
          <Navigation />
          {children}
        </ProviderStore>
      </body>
    </html>
  );
}
