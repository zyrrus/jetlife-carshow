import "~/styles/globals.css";

import { Syne } from "next/font/google";

const display = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "Jetlife Car Show",
  description: "2nd annual Jetlife Car Show presented by Nascar.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} bg-bg text-fg scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
