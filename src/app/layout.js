export const metadata = {
  metadataBase: new URL("https://www.storecloudy.com/en"),
  title: {
    default: "Cloudy Melody", // Tiêu đề mặc định
    template: "%s | Cloudy Melody", // Sử dụng %s để thêm tiêu đề trang cụ thể
  },
  description:
    "Cloudy Melody - A blog sharing song lyrics, lyric books, and a music store. Explore translations of songs about life and connect with a community of music lovers.",
};

export default function RootLayout({ children }) {
  return children;
}
