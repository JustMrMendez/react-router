// import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export async function loader() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=10");
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching users:", error);
		return { users: [{ test: "test" }] };
	}
}
export const Users = () => {
	const users = useLoaderData();

	useEffect(() => {
		console.log(users);
	});
	return (
		<ul style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
            listStyle: "none",
        }}>
			{users.map((user) => (
				<li
					key={user.login.uuid}
					style={{
						display: "flex",
						gap: "1rem",
                        width: "45%",
						alignItems: "center",
						padding: "1rem",
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						marginBottom: "1rem",
					}}>
					<Link to={`/users/?email=${user.email}`}>
                        <span>
                            {user.name.first} {user.name.last}
                        </span>
                        <span>{user.email}</span>
                    </Link>
				</li>
			))}
		</ul>
	);
};
