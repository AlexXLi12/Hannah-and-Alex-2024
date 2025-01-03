import { useRef, useEffect, useContext, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const AudioPlayer = ({ src }) => {
	const { interacted } = useContext(GlobalStateContext);
	const [idx, setIdx] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		if (interacted) audioRef.current.play();
	}, [interacted]);

	const handleEnded = () => {
		audioRef.current.pause(); // Pause the audio before changing the source
		setIdx((idx + 1) % src.length);
		audioRef.current.load(); // Load the new source
		const playAudio = () => {
			audioRef.current.play();
			audioRef.current.removeEventListener("canplaythrough", playAudio);
		};
		audioRef.current.addEventListener("canplaythrough", playAudio);
	};

	return <audio ref={audioRef} src={src[idx]} preload="auto" onEnded={handleEnded} />;
};

export default AudioPlayer;
