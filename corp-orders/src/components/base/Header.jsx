import { NavLink } from "react-router-dom"

function Header() {
	return (
		<header className="p-3 bg-dark text-white">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<NavLink
						to="/"
						className="fw-bold bg-info rounded-2 p-2 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
					>
						Главная
					</NavLink>
					<ul className="ms-4 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li>
							<NavLink
								to="/employees"
								className={({ isActive }) =>
									`${
										isActive ? "fw-bold" : null
									} rounded-2 nav-link px-2 text-light`
								}
							>
								Сотрудники
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dishes"
								className={({ isActive }) =>
									`${
										isActive ? "fw-bold" : null
									} rounded-2 nav-link px-2 text-light`
								}
							>
								Блюда
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/orders"
								className={({ isActive }) =>
									`${
										isActive ? "fw-bold" : null
									} rounded-2 nav-link px-2 text-light`
								}
							>
								Заказы
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
