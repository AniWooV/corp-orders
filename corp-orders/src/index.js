import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "./store"

import App from "./App"
import Layout from "./hocs/Layout"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Layout>
				<App />
			</Layout>
		</Provider>
	</BrowserRouter>
)
