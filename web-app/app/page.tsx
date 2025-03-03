"use client";

import CryptoTracker from "@/components/CryptoTracker";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="max-w-[1000px] mx-4 sm:mx-6 flex flex-col justify-center grow text-white gap-6">
				<p className="mt-8 text-3xl sm:text-4xl font-bold tracking-wide self-center">
					Simple Crypto Price Tracker
				</p>
				<p className="text-wrap text-neutral-400 self-center mb-0 sm:mb-12">
					Tracks latest prices of top 5 cryptocurrencies
				</p>
				<CryptoTracker />
			</div>
		</QueryClientProvider>
	);
}
