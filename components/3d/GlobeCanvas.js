import { useContext, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "drei";
import Globe from "./Globe";
import QuakeMarker from "./QuakeMarker";

// contexts
import { UFOContext } from "../Provider";
import { EarthQuakeContext } from "../EarthQuakes";

export default function GlobeCanvas() {
	const { quakeData, error } = useContext(EarthQuakeContext);

	const EARTH_RADIUS = 10;

	return (
		<Canvas camera={{ position: [0, 0, 35] }}>
			<ambientLight intensity={2} />
			<pointLight position={[40, 40, 40]} />
			<Suspense fallback={<>Loading!</>}>
				<Globe radius={EARTH_RADIUS} />
			</Suspense>

			{quakeData ? (
				<Suspense fallback={<>Loading!</>}>
					{quakeData.features.map((quakePoint, index) => (
						<QuakeMarker quakePoint={quakePoint} key={index} earthRadius={EARTH_RADIUS} />
					))}
				</Suspense>
			) : null}
			<OrbitControls />
		</Canvas>
	);
}
