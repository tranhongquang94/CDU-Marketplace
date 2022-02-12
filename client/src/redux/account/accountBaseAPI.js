import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountAPI = createApi({
  reducerPath: "accountAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/account" }),
  endpoints: () => ({}),
});
