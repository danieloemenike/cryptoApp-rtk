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















