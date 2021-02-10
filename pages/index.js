import GlobeCanvas from "../components/3d/GlobeCanvas";
import Content from "../components/Content";
const Index = () => {
	return (
		<div className='main'>
			<div className='globeContainer'>
				<GlobeCanvas />
			</div>
			<Content />
		</div>
	);
};

export default Index;
