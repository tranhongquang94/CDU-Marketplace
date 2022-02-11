import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemAPI = createApi({
    reducerPath: 'itemAPI',
    baseQuery: fetchBaseQuery({ baseUrl: "/item"}),
    endpoints: () => ({})
});

