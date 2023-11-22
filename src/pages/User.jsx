/* eslint-disable react/prop-types */

export async function loader({ params }) {
	try {
		const response = await fetch(
			`https://random-data-api.com/api/v2/users?size=1`
		);
		const data = await response.json();

		console.log(`fetching user with email ${params.email}`, data);
		return data;
	} catch (error) {
		console.error("Error fetching users:", error);
		return { users: [{ test: "test" }] };
	}
}

import { useLoaderData } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
	const user = useLoaderData();
	return (
		<div className="user-profile">
			<div className="header">
				<img src={user.avatar} alt="avatar" className="avatar" />
				<h1>
					{user.first_name} {user.last_name}
				</h1>
				<p className="username">@{user.username}</p>
			</div>

			<div className="info">
				<h2>Personal Information</h2>
				<p>
					<strong>Email:</strong> {user.email}
				</p>
				<p>
					<strong>Gender:</strong> {user.gender}
				</p>
				<p>
					<strong>Date of Birth:</strong> {user.date_of_birth}
				</p>
				<p>
					<strong>Phone:</strong> {user.phone_number}
				</p>
			</div>

			<div className="employment">
				<h2>Employment</h2>
				<p>
					<strong>Title:</strong> {user.employment.title}
				</p>
				<p>
					<strong>Key Skill:</strong> {user.employment.key_skill}
				</p>
			</div>

			<div className="address">
				<h2>Address</h2>
				<p>
					{user.address.street_address}, {user.address.city},{" "}
					{user.address.state}, {user.address.zip_code},{" "}
					{user.address.country}
				</p>
			</div>

			<div className="subscription">
				<h2>Subscription</h2>
				<p>
					<strong>Plan:</strong> {user.subscription.plan}
				</p>
				<p>
					<strong>Status:</strong> {user.subscription.status}
				</p>
				<p>
					<strong>Payment Method:</strong>{" "}
					{user.subscription.payment_method}
				</p>
			</div>
		</div>
	);
};

export default UserProfile;
