import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BTE Community Tracker",
  description: "BTE community platform structure"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
