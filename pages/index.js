import { useContext } from "react";
import { StoreContext } from "../components/store/StateProvider";
import GlobeCanvas from "../components/3d/GlobeCanvas";
import Content from "../components/Content";
const Index = () => {
	const { state, actions } = useContext(StoreContext);
	return (
		<div className='main'>
			<button onClick={actions.fetchQuakeData}>Earth Quakes</button>
			<button onClick={actions.asyncDecrement}>UFOS</button>
			<div className='globeContainer'>
				<GlobeCanvas />
			</div>

			<Content />
		</div>
	);
};

export default Index;
