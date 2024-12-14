import React, { useState } from "react";
import Learner from "./Learner";

const App = () => {
	const [learnerData] = useState({
		learners: [
			{
				name: "Cait Yomorta",
				bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? ...",
				scores: [
					{ date: "2018-02-08", score: 77 },
					{ date: "2018-04-22", score: 92 },
					{ date: "2018-09-15", score: 68 },
				],
			},
			{
				name: "Holly Baird",
				bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! ...",
				scores: [
					{ date: "2018-12-14", score: 88 },
					{ date: "2019-01-09", score: 79 },
					{ date: "2019-02-23", score: 91 },
					{ date: "2019-03-01", score: 95 },
				],
			},
			{
				name: "Wes Mungia",
				bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores ...",
				scores: [
					{ date: "2018-10-11", score: 62 },
					{ date: "2018-11-24", score: 74 },
					{ date: "2018-12-19", score: 85 },
				],
			},
		],
	});

	return (
		<div>
			<h1>Rendering Arrays in React</h1>
			{learnerData.learners.map((learner, index) => (
				<Learner
					key={index}
					name={learner.name}
					bio={learner.bio}
					scores={learner.scores}
				/>
			))}
		</div>
	);
};

export default App;
