import React from "react";

const Score = ({ date, score }) => {
	return (
		<div>
			<p>
				<strong>Date:</strong> {date} | <strong>Score:</strong> {score}
			</p>
		</div>
	);
};

export default Score;
