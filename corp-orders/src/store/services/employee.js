import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const employeeApi = createApi({
	reducerPath: "employeeApi",
	tagTypes: "Employee",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://127.0.0.1:8000/api/employees",
	}),
	endpoints: (builder) => ({
		getEmployeesList: builder.query({
			query: () => ({ url: "/", method: "GET" }),
			providesTags: [{ type: "Employee", id: "LIST" }],
		}),
		getEmployeeById: builder.query({
			query: (id) => ({ url: `/${id}/`, method: "GET" }),
			providesTags: [{ type: "Employee", id: "LIST" }],
		}),
		postEmployee: builder.mutation({
			query: (employee) => ({ url: "/", method: "POST", body: employee }),
			invalidatesTags: [{ type: "Employee", id: "LIST" }],
		}),
		deleteEmployeeById: builder.mutation({
			query: (id) => ({ url: `/${id}/`, method: "DELETE" }),
			invalidatesTags: [{ type: "Employee", id: "LIST" }],
		}),
		putEmployeeById: builder.mutation({
			query: ({ id, employee }) => ({
				url: `/${id}/`,
				method: "PUT",
				body: employee,
			}),
			invalidatesTags: [{ type: "Employee", id: "LIST" }],
		}),
		patchEmployeeById: builder.mutation({
			query: ({ id, employee }) => ({
				url: `/${id}/`,
				method: "PATCH",
				body: employee,
			}),
			invalidatesTags: [{ type: "Employee", id: "LIST" }],
		}),
	}),
})

export const {
	useGetEmployeesListQuery,
	useGetEmployeeByIdQuery,
	usePostEmployeeMutation,
	useDeleteEmployeeByIdMutation,
	usePutEmployeeByIdMutation,
	usePatchEmployeeByIdMutation,
} = employeeApi
