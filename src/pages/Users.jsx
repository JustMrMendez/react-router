// import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export async function userLoader() {
	try {
		const response = await fetch(
			"https://random-data-api.com/api/v2/users?size=10"
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching users:", error);
		return { users: [{ test: "test" }] };
	}
}
export const Users = () => {
	const users = useLoaderData();

	return (
		<ul
			style={{
				display: "flex",
				flexWrap: "wrap",
				gap: ".5rem",
				listStyle: "none",
			}}>
			{users.map((user) => (
				<li
					key={user.id}
					style={{
						display: "flex",
						gap: "1rem",
						width: "45%",
						alignItems: "center",
						padding: "1rem",
						boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						marginBottom: "1rem",
					}}>
					<Link to={`/user/${user.email}`}>
						<span>
							{user.first_name} {user.last_name}
						</span>
						<span> __ {user.email}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

/** {
	"id": 9267,
	"uid": "5322aa95-cc70-4344-a464-0af772baf492",
	"password": "CxbYt1BUMm",
	"first_name": "Ileen",
	"last_name": "Kulas",
	"username": "ileen.kulas",
	"email": "ileen.kulas@email.com",
	"avatar": "https://robohash.org/velarchitectovoluptatum.png?size=300x300&set=set1",
	"gender": "Male",
	"phone_number": "+1-758 1-749-379-4490 x3887",
	"social_insurance_number": "961324332",
	"date_of_birth": "1970-03-05",
	"employment": {
		"title": "Direct Marketing Associate",
		"key_skill": "Technical savvy"
	},
	"address": {
		"city": "Lake Jereview",
		"street_name": "Wiley Landing",
		"street_address": "8473 Wiley Wall",
		"zip_code": "12842",
		"state": "Illinois",
		"country": "United States",
		"coordinates": {
			"lat": -10.370806521971701,
			"lng": 87.21453406777903
		}
	},
	"credit_card": {
		"cc_number": "6771-8959-1759-8465"
	},
	"subscription": {
		"plan": "Diamond",
		"status": "Pending",
		"payment_method": "Paypal",
		"term": "Monthly"
	}
 */
