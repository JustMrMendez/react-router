import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<nav style={{ display: "flex", gap: "1rem" }}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/showcase">Showcase</Link>
				<Link to="/users">Users</Link>
			</nav>
			<div
				className="container grid"
				style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", padding: "3rem"}}>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
