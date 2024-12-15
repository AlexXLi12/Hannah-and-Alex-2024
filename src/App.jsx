import React, { useEffect, useState } from "react";
import ScrapBook_Page from "./ScrapBook_Page";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.width = `${Math.random() * 10 + 5}px`;
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(snowflake);

      snowflake.offsetHeight;

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => clearInterval(interval);
  }, []);

  function handleNext() {
    if (count !== pages.length-1)
      setCount(count + 1);
    console.log(count);
  }

  function handlePrev() {
    if (count !== 0)
      setCount(count - 1);
    console.log(count);
  }
  const maxCount = 1;
  const pages = [
		<ScrapBook_Page
			title="Hannah & Alex 2024"
			images={[
				"./src/assets/1stpage1.jpg",
				"./src/assets/1stpage2.jpg",
				"./src/assets/1stpage3.jpg",
			]}
			text="To our first holiday season together :)"
			count={count}
			maxCount={maxCount}
			onPrev={handlePrev}
			onNext={handleNext}
		/>,
		<ScrapBook_Page
			title="Gasworks Park"
			images={[
				"./src/assets/gasworks1.jpg",
				"./src/assets/gasworks2.jpg",
				"./src/assets/gasworks3.jpg",
			]}
			text="One of our first dates"
			count={count}
			maxCount={maxCount}
			onPrev={handlePrev}
			onNext={handleNext}
		/>,
	];

  return (
    <div className="App">
      {pages[count]}
    </div>
  );
}

export default App;
