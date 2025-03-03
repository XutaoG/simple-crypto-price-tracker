import { CircleCheck, CircleX, RotateCw } from "lucide-react";
import CryptoListItem from "./CryptoListItem";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptos } from "@/utils";
import { Fragment, useState } from "react";

const CryptoTracker = () => {
	// Fetch crypto data
	const {
		data: cryptoData,
		isLoading,
		isFetching,
		refetch,
		error,
	} = useQuery({
		queryFn: () => fetchCryptos(),
		queryKey: ["crypto"],
		staleTime: 30 * 1000, // Invalidate cache after 30 seconds
	});

	const onRefresh = () => {
		refetch();
		setShowRefreshed(true);

		setTimeout(() => {
			setShowRefreshed(false);
		}, 1000);
	};

	// Manage search state
	const [searchKeyword, setSearchKeyword] = useState("");

	// Show refreshed message
	const [showRefreshed, setShowRefreshed] = useState(false);

	// Render crypto prices
	const cryptoListItems = cryptoData?.map((crypto) => {
		if (crypto.name.toLowerCase().includes(searchKeyword.trim().toLowerCase())) {
			return <CryptoListItem key={crypto.id} cryptoDetail={crypto} />;
		}
	});

	return (
		<div className="flex flex-col gap-4 sm:gap-6">
			{/* Search bar + refresh */}
			<div className="flex gap-2 sm:gap-6">
				{/* Search bar */}
				<div className="flex justify-center items-center gap-2 sm:gap-4 pl-4 pr-1 rounded-full border h-10 border-neutral-700 grow">
					{/* Search input */}
					<input
						className="outline-none grow min-w-0 w-0"
						value={searchKeyword}
						onChange={(e) => setSearchKeyword(e.target.value)}
						placeholder="Search"
					/>
					{/* Clear search */}
					<button
						className="py-0.5 px-2 rounded-full border border-neutral-700"
						onClick={() => setSearchKeyword("")}
					>
						Clear
					</button>
				</div>
				{/* Refresh */}
				<button
					className="flex gap-2 items-center h-10 p-3 rounded-full bg-green-600 hover:cursor-pointer hover:bg-green-700"
					onClick={onRefresh}
				>
					<p className="font-semibold hidden sm:block">Refresh</p>
					<RotateCw size={16} className={`${isFetching && "animate-spin"}`} />
				</button>
			</div>

			{/* Display cryptos */}
			<div className="border border-neutral-800 bg-neutral-900 p-4 md:p-6 rounded-xl sm:rounded-3xl flex flex-col gap-8">
				{/* Header */}
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4 md:gap-8 text-neutral-400 text-sm text-right font-medium">
						<p className="hidden sm:block">#</p>
						<div className="w-12" />
						<p className="text-left grow min-w-24">Name</p>
						<p className="w-24">Current Price</p>
						<p className="w-24 hidden sm:block">24h Change</p>
						<p className="w-28 hidden lg:block">24h Highest</p>
						<p className="w-28 hidden lg:block">24h Lowest</p>
					</div>
					<div className="h-[1px] bg-neutral-600" />
				</div>
				{error ? (
					// Error message
					<div className="flex justify-center items-center gap-2">
						<CircleX size={28} />
						<p className="font-semibold">An unexpect error occurred...</p>
					</div>
				) : !cryptoData || isLoading ? (
					// Loading indicator
					<div className="flex justify-center items-center gap-2">
						<RotateCw size={24} className="animate-spin" />
						<p className="font-semibold">Loading...</p>
					</div>
				) : (
					// Crypto listings
					cryptoListItems
				)}
			</div>
			{/* Show refresh */}

			<div className="flex justify-center items-center gap-1 text-neutral-400 h-8">
				{showRefreshed && (
					<Fragment>
						<CircleCheck size={20} />
						<p className="">Refreshed</p>
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default CryptoTracker;
