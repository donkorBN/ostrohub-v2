import type { Metadata } from "next";
import { Inika, Inter } from "next/font/google";
import "./globals.scss";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });
const inika = Inika({ subsets: ["latin"], weight:["400"]})

export const metadata: Metadata = {
  title: "Home - OstroHub",
  description: " Nurturing the next generation of innovators and leaders. | Inspiring Journeys",
  openGraph: {
		title: "OstroHub",
		description: "Fostering tech brilliance! Your community for growth. Whether seasoned or new, find support navigating the tech landscape with us. 🚀",
		images: "https://pbs.twimg.com/profile_images/1813255327351009281/DeSZiT8U_400x400.jpg"
	},
	keywords: ["Tech community", "Fostering growth"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <div className="max-w-[1600px] mx-auto">
          {children}
          </div>
        </Layout>
      </body>
    </html>
  );
}
