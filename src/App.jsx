import React, { useEffect, useContext } from "react";
import ScrapBook_Page from "./ScrapBook_Page";
import { GlobalStateContext } from "./GlobalStateContext";
import AudioPlayer from "./AudioPlayer";
import "./App.css";

function App() {
	const { count, setCount, _lastDirection, _setLastDirection } =
		useContext(GlobalStateContext);
	useEffect(() => {
		const createSnowflake = () => {
			const snowflake = document.createElement("div");
			snowflake.className = "snowflake";
			snowflake.style.left = `${Math.random() * 100}vw`;
			snowflake.style.width = `${Math.random() * 10 + 5}px`;
			snowflake.style.height = snowflake.style.width;
			snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
			document.body.appendChild(snowflake);

			setTimeout(() => {
				snowflake.remove();
			}, 5000);
		};

		const interval = setInterval(createSnowflake, 200);

		return () => clearInterval(interval);
	}, []);

	const maxCount = 4;
	const pages = [
		<ScrapBook_Page
			title="Hannah & Alex 2024"
			images={[
				"./src/assets/1stpage1.jpg",
				"./src/assets/1stpage2.jpg",
				"./src/assets/1stpage3.jpg",
			]}
			text="To our first holiday season together :)"
			maxCount={maxCount}
		/>,
		<ScrapBook_Page
			title="Gasworks Park"
			images={[
				"./src/assets/gasworks1.jpg",
				"./src/assets/gasworks2.jpg",
				"./src/assets/gasworks3.jpg",
			]}
			text="One of our first dates"
			maxCount={maxCount}
		/>,
		<ScrapBook_Page
			title="Medina Beach Park"
			images={[
				"./src/assets/medina1.jpg",
				"./src/assets/medina2.jpg",
				"./src/assets/medina3.jpg",
			]}
			text="Our spot this summer"
			maxCount={maxCount}
		/>,
		<ScrapBook_Page
			title="Vancouver"
			images={[
				"./src/assets/vancouver1.jpg",
				"./src/assets/vancouver2.jpg",
				"./src/assets/vancouver3.jpg",
			]}
			text="Our first trip together"
			maxCount={maxCount}
		/>,
		<ScrapBook_Page
			title="Halloween"
			images={[
				"./src/assets/halloween1.jpg",
				"./src/assets/halloween2.jpg",
				"./src/assets/halloween3.jpg",
			]}
			text="Gay little monkey & banana"
			maxCount={maxCount}
		/>
	];
	const songList = [
		"./src/assets/beginning_to_look_alot_like_christmas.mp3",
		"./src/assets/all_i_want_for_christmas_is_you.mp3",
		"./src/assets/last_christmas.mp3",
	];
	return (
		<div className="App">
			{pages[count]}
			<AudioPlayer src={songList} />
		</div>
	);
}

export default App;
