import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { dishesApi, employeeApi, ordersApi } from "./services"

const rootReducer = combineReducers({
	[employeeApi.reducerPath]: employeeApi.reducer,
	[dishesApi.reducerPath]: dishesApi.reducer,
	[ordersApi.reducerPath]: ordersApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			employeeApi.middleware,
			dishesApi.middleware,
			ordersApi.middleware
		),
})
