import { CryptoDetail } from "@/types";

export const fetchCryptos = async () => {
	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h";

	const response = await fetch(url);
	const data: CryptoDetail[] = await response.json();
	return data;
};
