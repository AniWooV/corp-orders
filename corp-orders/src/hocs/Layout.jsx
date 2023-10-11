import Header from "../components/base/Header"

function Layout({children}) {
	return (
		<>
			<Header />
			<main>
                {children}
            </main>
		</>
	)
}

export default Layout
