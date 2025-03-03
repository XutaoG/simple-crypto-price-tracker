import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Simple Crypto Price Tracker",
	description: "Tracks latest prices of 5 cryptocurrencies",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased min-h-screen flex justify-center bg-neutral-950 relative`}
			>
				{children}
				<p className="px-2 py-0.5 bg-white rounded-full text-black absolute bottom-3 right-3 opacity-30">
					By Xutao Gao
				</p>
			</body>
		</html>
	);
}
