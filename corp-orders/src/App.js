import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/base/Home"
import Employees from "./components/employees/Employees"
import Dishes from "./components/dishes/Dishes"
import Orders from "./components/orders/Orders"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/employees" element={<Employees />} />
			<Route path="/dishes" element={<Dishes />} />
			<Route path="/orders" element={<Orders />} />
		</Routes>
	)
}

export default App
