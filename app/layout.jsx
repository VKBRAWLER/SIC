import "@/styles/globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "TBI",
  description: "Technology Business Incubator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
