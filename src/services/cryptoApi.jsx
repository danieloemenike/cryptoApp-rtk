import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = import.meta.env.VITE_CRYPTO_API_URL;

const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host':  import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST
}

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => ({
                url: `coins?limit=${count}`,
                method: 'GET',
                headers
            })
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => ({
                url: `coin?limit=${coinId}`,
                method: 'GET',
                headers
            })
        }),

        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod  }) => ({
                url: `/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`,
                method: 'GET',
                headers
            })
        }),

    })
})



export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi















/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ea092cf0amshf5562f5cb8a3fb5p1d9679jsn10e8d70702bf',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    */