import { itemAPI } from "./itemBaseAPI";

const itemListAPI = itemAPI.injectEndpoints({
  endpoints: (build) => ({
    getItemList: build.query({
      query: () => `list`,
    }),
  }),
  overrideExisting: false,
});

const itemJobListAPI = itemAPI.injectEndpoints({
  endpoints: (build) => ({
    getJobList: build.query({
      query: () => `job`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetItemListQuery } = itemListAPI;
export const { useGetJobListQuery } = itemJobListAPI;
