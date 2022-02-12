import { accountAPI } from "./accountBaseAPI";

const accountLoginAPI = accountAPI.injectEndpoints({
  endpoints: (build) => ({
    postAccountLogin: build.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { usePostAccountLoginMutation } = accountLoginAPI;
