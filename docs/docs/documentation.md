---
sidebar_position: 1
slug: /
---

# Documentation

---

## Project Setup

### Prerequisites

-   **Node.js** (Version 18 or higher)
-   **NPM** installation

### Installation

Clone the repository:

```sh
git clone https://github.com/XutaoG/simple-crypto-price-tracker.git
cd simple-crypto-price-tracker
```

### Next.js

Install dependencies for the next.js web application and run:

```sh
cd web-app
npm install
npm run dev
```

### Docusaurus

Install dependencies for Docusaurus and run (Make sure to move back to # Project Setup

### Prerequisites

-   **Node.js** (Version 18 or higher)
-   **NPM** installation

### Installation

Clone the repository:

```
git clone https://github.com/XutaoG/simple-crypto-price-tracker.git
```

### Next.js

Install dependencies for the next.js web application and run:

```sh
cd web-app
npm install
npm run dev
```

### Docusaurus

Install dependencies for Docusaurus and run (Make sure to move back to # Project Setup

### Prerequisites

-   **Node.js** (Version 18 or higher)
-   **NPM** installation

### Installation

Clone the repository:

```
git clone https://github.com/XutaoG/simple-crypto-price-tracker.git
```

### Next.js

Install dependencies for the next.js web application and run:

```sh
cd web-app
npm install
npm run dev
```

### Docusaurus

Install dependencies for Docusaurus and run (Make sure to move back to the original directory):

```sh
cd docs
npm install
npm start
```

--- directory):

```sh
cd docs
npm install
npm start
```

--- directory):

```sh
cd docs
npm install
npm start
```

---

## API Integration

[CoinGecko API](https://www.coingecko.com/en/api) is used to fetch live cryptocurrency prices.

### CoinGecko API Endpoint

```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&price_change_percentage=24h
```

### Feching Data

React Query and fetch is used to retrieve the live cryptocurrency prices from CoinGecko.

### **`fetch()`** - Fetching Data

```js
export const fetchCryptos = async () => {
	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&price_change_percentage=24h";
	const response = await fetch(url);
	const data: CryptoDetail[] = await response.json();
	return data;
};
```

### **React Query** - Fetching Data

React Query calls `fetchCryptos()` to retrieve the data and caches it for 30 seconds.

```js
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
```

### **React Query** - Update data

An `onClick()` listener is added to an button that triggers a refetch every clicked by user.

```js
const onRefresh = () => {
	refetch();
};
```

---

## State Management Details

**React Query** is used for efficient data fetching, caching, and automatic updates.

-   **Automatic Caching**: Prevents redundant API calls and application performance.
-   **Background Updates**: Keeps data up-to-date without reloading the application.
-   **Manual Refetching**: Refresh button triggers API calls to retrieve new data.

---

## Challenges & Solutions

#### 1. API Rate Limits

**Problem:** CoinGecko enforces rate limits and, while testing, often exceeded that limit.  
**Solution:** Implement caching with React Query and auto-refresh every 30s.

#### 2. Mobile Responsiveness

**Problem:** Responsive layout broke on smaller screens.  
**Solution:** Tailwind CSS, flex, and media queries was used to easily resize elements.

#### 3. Inexperience with Docusarus

**Problem:** Lack of experience with Docusaurus made documentation difficult.  
**Solution:** Official Docusaurus documentations, guides, and tutorials made learning easier.

---
