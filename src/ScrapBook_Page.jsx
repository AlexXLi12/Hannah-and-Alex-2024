import { useEffect } from "react";
import "./ScrapBook_Page.css";

function ScrapBook_Page({ title, images, text, count, maxCount, onPrev, onNext }) {

    useEffect(() => {
        document.getElementById("page").setAttribute("class", "slide-in");
    })
    
    function handleNext() {
        if (count !== maxCount) {
            document.getElementById("page").setAttribute("class", "slide-out");
            setTimeout(() => {
                onNext();
            }, 400);
        }
    }
	return (
		<>
			<div className="page" id="page">
				<h1 className="title">{title}</h1>
				{images.map((image, index) => (
					<img key={index} src={image} alt="uh oh" />
				))}
				<p>{text}</p>
				<div>
					{count !== 0 && <button onClick={() => onPrev()}>&larr;</button>}
					{count !== maxCount && <button onClick={() => handleNext()}>&rarr;</button>}
				</div>
			</div>
		</>
	);
}

export default ScrapBook_Page;
