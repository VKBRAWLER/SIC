import "@/styles/globals.css";
import Footer from "@components/Footer";
import Header from "@components/header";

export const metadata = {
  title: "TBI",
  description: "Technology Business Incubator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
