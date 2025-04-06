import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaceMaker Web",
  description: "Desktop version of the PaceMaker productivity timer. Tracks work time by categorized tasks, includes a break banking system, and stores everything locally.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}





