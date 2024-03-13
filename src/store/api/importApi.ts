import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const importFiles = createApi({
  reducerPath: "import",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-api.perfido.ai/api/v1/import/file" }),
  tagTypes: ["import"],
  endpoints: (builder) => ({
    importHar: builder.mutation({
      query: (body) => ({
        url: "/har",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["import"],
    }),
    importPostman: builder.mutation({
        query: (body) => ({
          url: "/postman",
          method: "POST",
          body,
          formData: true,
        }),
        invalidatesTags: ["import"],
      }),
      importJmeter: builder.mutation({
        query: (body) => ({
          url: "/jmeter",
          method: "POST",
          body,
          formData: true,
        }),
        invalidatesTags: ["import"],
      }),
      importSwagger: builder.mutation({
        query: (body) => ({
          url: "/swagger",
          method: "POST",
          body,
          formData: true,
        }),
        invalidatesTags: ["import"],
      }),
  }),
});

export const { useImportHarMutation, useImportPostmanMutation, useImportJmeterMutation, useImportSwaggerMutation } = importFiles;
