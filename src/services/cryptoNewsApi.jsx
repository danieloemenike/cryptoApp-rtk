import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = import.meta.env.VITE_NEWS_API_URL;

const headers = {
    'X-BingApis-SDK': 'true',
'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
'X-RapidAPI-Host': import.meta.env.VITE_NEWS_RAPIDAPI_HOST
}

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({newsCategory, count}) => ({
                url: `news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
                method: 'GET',
                headers
            }) 
        })
    })
})

export const { useGetNewsQuery} = cryptoNewsApi

