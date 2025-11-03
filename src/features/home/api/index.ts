import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  type Coin,
  type CoinResponse,
  type Currency,
} from "@/features/home/types/api";

export const homeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
    headers: {
      "x-cg-demo-api-key": import.meta.env.VITE_COIN_GECKO_API_KEY,
    },
  }),
  endpoints: (build) => ({
    GetMarket: build.query<
      Coin[],
      {
        currency: Currency;
      }
    >({
      query: ({ currency }) => ({
        url: "coins/markets",
        params: {
          vs_currency: currency,
        },
      }),
      transformResponse: (response: CoinResponse[]) =>
        response.map<Coin>(
          ({
            id,
            symbol,
            name,
            image,
            current_price,
            market_cap,
            price_change_percentage_24h,
          }) => ({
            id,
            symbol,
            name,
            image,
            currentPrice: current_price,
            marketCap: market_cap,
            priceChanged24h: price_change_percentage_24h,
          })
        ),
    }),
  }),
});

export const { useGetMarketQuery } = homeApi;
