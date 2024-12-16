import { useRef, useEffect, useContext } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
const AudioPlayer = ({ src }) => {
	const { interacted } = useContext(GlobalStateContext);
	const audioRef = useRef(null);

	useEffect(() => {
		if (interacted) audioRef.current.play();
	}, [interacted]);

	return <audio ref={audioRef} src={src} preload="auto" />;
};

export default AudioPlayer;
