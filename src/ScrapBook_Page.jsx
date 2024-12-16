import { useEffect, useContext } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import "./ScrapBook_Page.css";

function ScrapBook_Page({ title, images, text, maxCount }) {
	const { count, setCount, lastDirection, setLastDirection } =
		useContext(GlobalStateContext);

	useEffect(() => {
		const pageElement = document.getElementById("page");
		if (lastDirection === "right") {
			pageElement.setAttribute("class", "slide-in-right");
		} else if (lastDirection === "left") {
			pageElement.setAttribute("class", "slide-in-left");
		}
		console.log(pageElement.classList);
	}, [count]);

	function handlePrev() {
		if (count !== 0) {
			document.getElementById("page").setAttribute("class", "slide-out-right");
			setLastDirection("left");
			setTimeout(() => {
				setCount(count - 1);
			}, 400);
		}
	}

	function handleNext() {
		if (count !== maxCount) {
			document.getElementById("page").setAttribute("class", "slide-out-left");
			setLastDirection("right");
			setTimeout(() => {
				setCount(count + 1);
			}, 400);
		}
	}

	const rotateList = ["rotate-0", "rotate-1", "rotate-2"];

	return (
		<>
			<div className="page" id="page">
				<h1 className="title">{title}</h1>
				{images.map((image, index) => (
					<img className={rotateList[index]} key={index} src={image} alt="uh oh" />
				))}
				<p>{text}</p>
				<div>
					{count !== 0 && <button onClick={() => handlePrev()}>&larr;</button>}
					{count !== maxCount && (
						<button onClick={() => handleNext()}>&rarr;</button>
					)}
				</div>
			</div>
		</>
	);
}

export default ScrapBook_Page;
