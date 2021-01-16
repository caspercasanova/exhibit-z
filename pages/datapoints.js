import { useContext } from "react";
import GlobeCanvas from "../components/3d/GlobeCanvas";
import { StateStore } from "../components/store/StateProps";

const DataPoints = () => {
	const currentState = useContext(StateStore);
	console.log(currentState);
	const { state, dispatch } = currentState;
	return (
		<section>
			<h1>Globe Canvas</h1>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>Earth Quakes</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>UFOS</button>
			<GlobeCanvas />
		</section>
	);
};

export default DataPoints;
