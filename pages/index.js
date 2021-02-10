import GlobeCanvas from "../components/3d/GlobeCanvas";
import Content from "../components/Content";
import Modal from "../components/ui/Modal/Modal";
import { useUI } from "../components/ui/context";
const Index = () => {
	const { openModal, closeModal } = useUI();
	return (
		<div className='main'>
			<div className='globeContainer'>
				<GlobeCanvas />
			</div>
			<Content />
			<Modal open={false} onClose={closeModal}>
				<div>This would be data</div>
			</Modal>
		</div>
	);
};

export default Index;
