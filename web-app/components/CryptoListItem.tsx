import { CryptoDetail } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface CryptoListItemProps {
	cryptoDetail: CryptoDetail;
}

const CryptoListItem = ({ cryptoDetail }: CryptoListItemProps) => {
	return (
		<div className="flex items-center gap-4 md:gap-8 text-right font-medium">
			{/* Rank */}
			<p className="text-neutral-200 hidden sm:block">{cryptoDetail.market_cap_rank}</p>
			{/* Image */}
			<Image src={cryptoDetail.image} alt="crypto image" width={48} height={48} />
			{/* Name */}
			<div className="min-w-24 truncate flex flex-col grow text-left">
				<p className="font-bold text-lg sm:text-xl">{cryptoDetail.name}</p>
				<p className="text-neutral-400 text-sm">{cryptoDetail.symbol.toUpperCase()}</p>
			</div>
			{/* Current price */}
			<p className="w-24">${cryptoDetail.current_price.toFixed(2)}</p>
			{/* Price percentage change */}
			<div className="w-24 hidden sm:flex justify-end">
				<p
					className={`flex gap-0.5 items-center py-0.5 px-1 rounded-lg ${
						cryptoDetail.price_change_percentage_24h_in_currency < 0
							? "bg-red-500/40"
							: "bg-green-600/40"
					}`}
				>
					{cryptoDetail.price_change_percentage_24h_in_currency < 0 ? (
						<ChevronDown size={16} strokeWidth={3} />
					) : (
						<ChevronUp size={16} strokeWidth={3} />
					)}
					{Math.abs(cryptoDetail.price_change_percentage_24h_in_currency).toFixed(2)}%
				</p>
			</div>
			{/* High 24h */}
			<p className="w-28 hidden lg:block">${cryptoDetail.high_24h.toFixed(2)}</p>
			{/* Low 24h */}
			<p className="w-28 hidden lg:block">${cryptoDetail.low_24h.toFixed(2)}</p>
		</div>
	);
};

export default CryptoListItem;
