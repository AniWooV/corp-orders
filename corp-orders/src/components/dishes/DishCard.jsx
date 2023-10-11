function DishCard({ dish, handleClick, cart }) {
	return (
		<div className="container col-5 border border-2 border-info m-1 rounded-2 p-2">
			<div className="fw-bold fs-5 pb-1 border-bottom border-secondary">
				{dish.name}
			</div>
			<div className="my-3">{dish.ingredients}</div>
			<div className="d-flex flex-row flex-wrap">
				<div className="fs-5 fst-italic">
					{dish.price.toFixed(2)} руб.
				</div>
				<div className="flex-fill" />
				<button
					className={`${
						cart.includes(dish.id) ? "bg-danger" : "bg-success"
					} button border-0 rounded text-white`}
					onClick={handleClick}
				>
					{cart.includes(dish.id) ? "Убрать" : "Добавить"}
				</button>
			</div>
		</div>
	)
}

export default DishCard
