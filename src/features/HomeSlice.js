import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const HomeSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Teams", "Team"],
  endpoints: (builder) => ({}),
});

export default HomeSlice;
