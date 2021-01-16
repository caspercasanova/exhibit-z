import React from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
export default function Globe({ radius }) {
	const map = useLoader(THREE.TextureLoader, "./images/worldLight.png");

	return map ? (
		<mesh>
			<sphereBufferGeometry attach='geometry' args={[radius, 32, 32]} />
			<meshPhongMaterial
				attach='material'
				color='white'
				opacity={1}
				map={map}
				// wireframe
				roughness={1}
				metalness={0}
			/>
		</mesh>
	) : null;
}
