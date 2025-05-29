import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-key': '76755a7d0fmshc7882dd7ba99249p18ee99jsn3e5a94aea86d',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ cryptoDaily, count }) => createRequest(`/v1/cryptodaily?limit=${count}`),
        }),
    }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;



