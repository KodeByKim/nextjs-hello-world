import { redhatDisplay } from "@/utils/constants";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Metadata } from "next";
import "../sass/main.scss";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moxie Labs",
  description: "Step into our lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redhatDisplay.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
