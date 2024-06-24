import "~/styles/globals.css";

import { Syne } from "next/font/google";

const display = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "Jetlife Carshow",
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
      className={`${display.variable} bg-[#C0B2AC] text-[#2C2321]`}
    >
      <body>{children}</body>
    </html>
  );
}
