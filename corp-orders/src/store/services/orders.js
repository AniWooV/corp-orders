import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ordersApi = createApi({
	reducerPath: "ordersApi",
	tagTypes: "Order",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/api/orders",
	}),
	endpoints: (builder) => ({
		getOrdersList: builder.query({
			query: () => ({ url: "/", method: "GET" }),
			providesTags: [{ type: "Order", id: "LIST" }],
		}),
		getOrderById: builder.query({
			query: (id) => ({ url: `/${id}/`, method: "GET" }),
			providesTags: [{ type: "Order", id: "LIST" }],
		}),
		postOrder: builder.mutation({
			query: (order) => ({ url: "/", method: "POST", body: order }),
			invalidatesTags: [{ type: "Order", id: "LIST" }],
		}),
		deleteOrderById: builder.mutation({
			query: (id) => ({ url: `/${id}/`, method: "DELETE" }),
			invalidatesTags: [{ type: "Order", id: "LIST" }],
		}),
		putOrderById: builder.mutation({
			query: ({ id, order }) => ({
				url: `/${id}/`,
				method: "PUT",
				body: order,
			}),
			invalidatesTags: [{ type: "Order", id: "LIST" }],
		}),
		patchOrderById: builder.mutation({
			query: ({ id, order }) => ({
				url: `/${id}/`,
				method: "PATCH",
				body: order,
			}),
			invalidatesTags: [{ type: "Order", id: "LIST" }],
		}),
	}),
})

export const {
	useGetOrdersListQuery,
	useGetOrderByIdQuery,
	usePostOrderMutation,
	useDeleteOrderByIdMutation,
	usePutOrderByIdMutation,
	usePatchOrderByIdMutation,
} = ordersApi
