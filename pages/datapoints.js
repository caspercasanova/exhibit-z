import { useContext } from "react";
import GlobeCanvas from "../components/3d/GlobeCanvas";
import { StoreContext } from "../components/store/StateProvider";

const DataPoints = () => {
	const { state, actions } = useContext(StoreContext);
	console.log(state);

	return (
		<section>
			<h1>Globe Canvas</h1>
			<button onClick={() => actions.asyncIncrement()}>Earth Quakes</button>
			<button onClick={() => actions.asyncIncrement()}>UFOS</button>
			<GlobeCanvas />
		</section>
	);
};

export default DataPoints;
