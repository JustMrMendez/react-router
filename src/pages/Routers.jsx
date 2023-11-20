import { useState, useEffect } from "react";

function Routers() {
	const [route, setRoute] = useState(window.location.pathname);

	useEffect(() => {
		const handleRouteChange = () => {
			setRoute(window.location.pathname);
		};

		window.addEventListener("popstate", handleRouteChange);

		return () => {
			window.removeEventListener("popstate", handleRouteChange);
		};
	}, []);

	const navigate = (path) => {
		window.history.pushState({}, "", path);
		setRoute(path);
	};

	const renderRoute = () => {
		switch (route) {
			case "/":
				return <h2>Home Page</h2>;
			case "/about":
				return <h2>About Page</h2>;
			case "/users":
				return <h2>Users Page</h2>;
			default:
				return <h2>404 Not Found</h2>;
		}
	};

	return (
		<div>
			<nav style={{
                display: "flex",
                gap: "1rem",
            }}>
				<button onClick={() => navigate("/")}>Home</button>
				<button onClick={() => navigate("/about")}>About</button>
				<button onClick={() => navigate("/users")}>Users</button>
			</nav>
			{renderRoute()}
		</div>
	);
}

export default Routers;
