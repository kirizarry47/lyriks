import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key','e9bc066ba8mshd7ae8c630e2f707p1e9c1fjsnf43262bae01e');

            return headers;
        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
    
} = shazamCoreApi;
