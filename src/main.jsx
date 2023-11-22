import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import About from "./pages/About.jsx";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Users, userLoader as usersLoader } from "./pages/Users.jsx";
import User, { loader } from "./pages/User.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
	{
		path: "/users/",
		element: <Users />,
		loader: usersLoader,
	},
	{
		path: "user/:email",
		element: <User />,
		loader: loader
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
