import { useContext, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import Globe from "./Globe";
import QuakeMarker from "./QuakeMarker";

import { StoreContext } from "../store/StateProvider";

export default function GlobeCanvas() {
	const { state } = useContext(StoreContext);
	const EARTH_RADIUS = 10;
	// console.log("This is in the GlobeCanvass", quakeData);

	return (
		<Canvas camera={{ position: [0, 0, 35] }}>
			<ambientLight intensity={2} />
			<pointLight position={[40, 40, 40]} />
			<Suspense fallback={<>Loading!</>}>
				<Globe radius={EARTH_RADIUS} />
			</Suspense>

			{state.quakeData?.features?.length ? (
				<Suspense fallback={<>Loading!</>}>
					{state.quakeData?.features.map((quakePoint, index) => (
						<QuakeMarker quakePoint={quakePoint} key={index} earthRadius={EARTH_RADIUS} />
					))}
				</Suspense>
			) : null}
			<OrbitControls maxDistance={20} minDistance={16} />
		</Canvas>
	);
}
