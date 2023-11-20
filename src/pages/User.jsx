/* eslint-disable react/prop-types */

export async function loader(email) {
	try {
		const response = await fetch(`https://randomuser.me/api/?email=${email}`);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching users:", error);
		return { users: [{ test: "test" }] };
	}
}

const User = ({ user }) => {
	return (
		<div>
			<img
				src={user.picture.large}
				alt={`${user.name.first} ${user.name.last}`}
			/>
			<h2>
				{user.name.first} {user.name.last}
			</h2>
			<p>Email: {user.email}</p>
			<p>
				Location: {user.location.city}, {user.location.state},{" "}
				{user.location.country}
			</p>
			<p>Username: {user.login.username}</p>
		</div>
	);
};

export default User;
