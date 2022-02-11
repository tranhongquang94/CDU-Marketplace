import { itemAPI } from "./itemBaseAPI";

const itemRecentAPI = itemAPI.injectEndpoints({
  endpoints: (build) => ({
    recentItemList: build.query({
      query: () => `recent`,
    }),
  }),
  overrideExisting: false,
});

const itemRecentCarsAPI = itemAPI.injectEndpoints({
  endpoints: (build) => ({
    recentCarsList: build.query({
      query: () => `recent/cars`,
    }),
  }),
  overrideExisting: false,
});

const itemRecentAccomodationAPI = itemAPI.injectEndpoints({
  endpoints: (build) => ({
    recentAccomodation: build.query({
      query: () => `recent/accomodation`,
    }),
  }),
  overrideExisting: false,
});

export const { useRecentItemListQuery } = itemRecentAPI;
export const { useRecentCarsListQuery } = itemRecentCarsAPI;
export const { useRecentAccomodationQuery } = itemRecentAccomodationAPI;
