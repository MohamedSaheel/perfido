import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projects = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-api.perfido.ai/" }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getProjects: builder.query<any,void>({
      query: () =>
        `api/v1/authoring-api/project/user/${sessionStorage.getItem("userauth")}`,
      providesTags: ["Projects"],
    }),
    getProjectsView: builder.query({
      query: (id) =>
        `api/v1/authoring-api/project/${id}`,
      providesTags: ["Projects"],
    }),
    createProjects: builder.mutation({
      query: (title) => ({
        url: "api/v1/authoring-api/project/",
        method: "POST",
        body: title,
      }),
      invalidatesTags: ["Projects"],
    }),

    updateProjects: builder.mutation({
      query: ({ id, title }) => ({
        url: `Projects/${id}`,
        method: "PUT",
        body: { title },
      }),
      invalidatesTags: ["Projects"],
    }),

    deleteProjects: builder.mutation({
      query: (id) => ({
        url: `Projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectsViewQuery,
  useCreateProjectsMutation,
  useUpdateProjectsMutation,
  useDeleteProjectsMutation,
} = projects;
