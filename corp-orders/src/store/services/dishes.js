import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dishesApi = createApi({
	reducerPath: "dishesApi",
	tagTypes: "Dish",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/api/dishes",
	}),
	endpoints: (builder) => ({
		getDishesList: builder.query({
			query: () => ({ url: "/", method: "GET" }),
			providesTags: [{ type: "Dish", id: "LIST" }],
		}),
		getDishById: builder.query({
			query: (id) => ({ url: `/${id}/`, method: "GET" }),
			providesTags: [{ type: "Dish", id: "LIST" }],
		}),
		postDish: builder.mutation({
			query: (dish) => ({ url: "/", method: "POST", body: dish }),
			invalidatesTags: [{ type: "Dish", id: "LIST" }],
		}),
		deleteDishById: builder.mutation({
			query: (id) => ({ url: `/${id}/`, method: "DELETE" }),
			invalidatesTags: [{ type: "Dish", id: "LIST" }],
		}),
		putDishById: builder.mutation({
			query: ({ id, dish }) => ({
				url: `/${id}/`,
				method: "PUT",
				body: dish,
			}),
			invalidatesTags: [{ type: "Dish", id: "LIST" }],
		}),
		patchDishById: builder.mutation({
			query: ({ id, dish }) => ({
				url: `/${id}/`,
				method: "PATCH",
				body: dish,
			}),
			invalidatesTags: [{ type: "Dish", id: "LIST" }],
		}),
	}),
})

export const {
	useGetDishesListQuery,
	useGetDishByIdQuery,
	usePostDishMutation,
	useDeleteDishByIdMutation,
	usePutDishByIdMutation,
	usePatchDishByIdMutation,
} = dishesApi
