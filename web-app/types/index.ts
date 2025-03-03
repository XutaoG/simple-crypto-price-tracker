export interface CryptoDetail {
	id: string;
	name: string;
	symbol: string;
	image: string;
	current_price: number;
	market_cap_rank: number;
	high_24h: number;
	low_24h: number;
	price_change_percentage_24h_in_currency: number;
}
