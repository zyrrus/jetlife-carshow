import "~/styles/globals.css";

import { Syne } from "next/font/google";

const display = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "The Jetlife Cars & Coffee, Bike & Carshow presented by NASCAR",
  description:
    "Come join us at The Jetlife Cars & Coffee, Bike + Car show 2024 for a day of dope cars, loud music, and good family friendly vibes!",
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
