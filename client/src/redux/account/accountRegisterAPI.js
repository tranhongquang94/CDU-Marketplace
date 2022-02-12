import { accountAPI } from "./accountBaseAPI";

const accountRegisterAPI = accountAPI.injectEndpoints({
  endpoints: (build) => ({
    postAccountRegister: build.mutation({
      query: (body) => ({
        url: "create",
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { usePostAccountRegisterMutation } = accountRegisterAPI;
