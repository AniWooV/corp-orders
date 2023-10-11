import { useState } from "react"

import {
	useGetDishesListQuery,
	useGetEmployeesListQuery,
	usePostOrderMutation,
} from "../../store/services"

import DishCard from "../dishes/DishCard"

function Home() {
	const { data: employees } = useGetEmployeesListQuery()
	const { data: dishes } = useGetDishesListQuery()
	const [makeOrder, { error: makeOrderError }] = usePostOrderMutation()

	const [inputValues, setInputValues] = useState({
		employee: null,
		order_date: "",
		dishes: [],
	})

	const [touched, setTouched] = useState({
		employee: false,
		order_date: false,
		dishes: false,
	})

	const [errors, setErrors] = useState({
		employee: "Для заказа необходимо выбрать сотрудника!",
		order_date: "Для заказа необходимо выбрать дату!",
		dishes: "Заказ должен содержать позиции из меню!",
	})

	const [totalCost, setTotalCost] = useState(0)

	function handleShopingCart(event, dish) {
		event.preventDefault()

		setInputValues((prev) => {
			if (prev.dishes.includes(dish)) {
				prev.dishes = prev.dishes.filter((e) => e !== dish)

				setTotalCost((prev) => prev - dish.price)

				if (prev.dishes.length === 0) {
					setErrors((prev) => ({
						...prev,
						dishes: "Заказ должен содержать позиции из меню!",
					}))
				}

				return prev
			} else {
				prev.dishes.push(dish)

				setTotalCost((prev) => prev + dish.price)

				setErrors((prev) => ({
					...prev,
					dishes: "",
				}))

				return prev
			}
		})

		setTouched((prev) => ({
			...prev,
			dishes: true,
		}))
	}

	function handleChange(event) {
		setInputValues({
			...inputValues,
			[event.target.name]: event.target.value,
		})

		setTouched((prev) => ({ ...prev, [event.target.name]: true }))

		if (!event.target.value) {
			setErrors({
				...errors,
				[event.target.name]: "Для заказа необходимо выбрать дату!",
			})
		} else {
			setErrors({ ...errors, [event.target.name]: "" })
		}
	}

	function checkIsFormValid() {
		if (errors.employee || errors.dishes || errors.order_date) {
			return false
		}

		return true
	}

	function testYourLuck(event) {
		event.preventDefault()

		if (dishes === undefined || dishes.length === 0) {
			return
		}

		const shuffled = [...dishes.filter((e) => e.id)].sort(
			() => 0.5 - Math.random()
		)

		var random = Math.floor(Math.random() * dishes.length)

		setInputValues((prev) => ({
			...prev,
			dishes: shuffled.slice(0, random),
		}))

		setErrors((prev) => ({ ...prev, dishes: "" }))
		setTouched((prev) => ({ ...prev, dishes: true }))
	}

	async function handleSubmit(event) {
		event.preventDefault()

		let order = { ...inputValues }

		order.dishes = inputValues.dishes.map((dish) => dish.id)

		await makeOrder(order).unwrap()

		setInputValues({ employee: null, order: "", dishes: [] })
	}

	console.log(inputValues)

	return (
		<div className="container align-items-center justify-content-center mt-2">
			<form className="container">
				<div className="d-flex flex-row justify-content-center row">
					<div className="col-8">
						<label
							htmlFor="dishes"
							className="fs-4 border-start border-4 px-2 border-info"
						>
							Выберите блюда:
						</label>
						<div
							id="dishes"
							className="d-flex flex-row flex-wrap align-items-start mt-2"
						>
							{dishes?.map((dish, index) => {
								return (
									<DishCard
										key={index}
										dish={dish}
										handleClick={(event) => {
											handleShopingCart(event, dish)
										}}
										cart={inputValues.dishes.map(
											(dish) => dish.id
										)}
									/>
								)
							})}
						</div>
					</div>
					<div className="col-4">
						<div className="">
							<label
								htmlFor="employee"
								className="fs-4 border-start border-4 px-2 border-info"
							>
								Выберите сотрудника:
							</label>
							<select
								className="mt-2 bg-white rounded-2 p-1 border-1 border-secondary"
								name="emloyee"
								onChange={(event) =>
									setInputValues((prev) => {
										if (event.target.value) {
											setErrors((prev) => ({
												...prev,
												employee: "",
											}))
										} else {
											setErrors((prev) => ({
												...prev,
												employee:
													"Для заказа необходимо выбрать сотрудника!",
											}))
										}

										setTouched((prev) => ({
											...prev,
											employee: true,
										}))

										prev.employee = event.target.value

										return prev
									})
								}
							>
								<option value="" className="bg-white">
									--Выберите сотрудника--
								</option>
								{employees?.map((employee, index) => {
									return (
										<option
											className="bg-white"
											key={index}
											value={employee.id}
										>{`${employee.second_name} ${employee.first_name}`}</option>
									)
								})}
							</select>
						</div>
						<div className="mt-2">
							<label
								htmlFor="employee"
								className="fs-4 border-start border-4 px-2 border-info"
							>
								Выберите дату заказа:
							</label>
							<input
								className="mt-2 rounded-2 border-1 border-secondary"
								type="date"
								name="order_date"
								value={inputValues.order_date}
								onChange={handleChange}
							/>
						</div>
						<div className="mt-4 d-flex gap-2">
							<button
								className="bg-warning border-0 button text-white p-1 rounded-2"
								onClick={testYourLuck}
								type="button"
							>
								Мне повезет
							</button>
							<button
								className={`${
									checkIsFormValid()
										? "bg-success"
										: "bg-secondary"
								} border-0 button text-white p-1 rounded-2`}
								onClick={handleSubmit}
								type="submit"
								disabled={!checkIsFormValid()}
							>
								Сделать заказ
							</button>
						</div>
						{(errors.dishes && touched.dishes) ||
						(errors.employee && touched.employee) ||
						(errors.order_date && touched.order_date) ? (
							<div className="bg-danger rounded-2 border-secondary border-1 text-white mt-2 p-1">
								{errors.dishes && touched.dishes ? (
									<div>- {errors.dishes}</div>
								) : null}
								{errors.employee && touched.employee ? (
									<div>- {errors.employee}</div>
								) : null}
								{errors.order_date && touched.order_date ? (
									<div>- {errors.order_date}</div>
								) : null}
							</div>
						) : null}

						<div className="mt-2">
							<span className="fw-bold">Корзина:</span>
							<div className="d-flex flex-row flex-wrap gap-1">
								{inputValues?.dishes.map((dish, index) => {
									return (
										<button
											key={index}
											className="bg-secondary rounded-2 p-1 text-white border-1 border-dark"
											onClick={(event) =>
												handleShopingCart(event, dish)
											}
										>{`${dish.name}, ${dish.price} руб.`}</button>
									)
								})}
							</div>
							<div className="mt-2">
								{`Общая сумма: `}{" "}
								<span className="fst-italic">{`${totalCost.toFixed(
									2
								)} руб.`}</span>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Home
