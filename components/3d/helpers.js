import * as THREE from "three";
const DEGREE_TO_RADIAN = Math.PI / 180;

export function coordinateToPosition(lat, lng, earthRadius) {
	const phi = (90 - lat) * DEGREE_TO_RADIAN;
	const theta = (lng + 180) * DEGREE_TO_RADIAN;

	return new THREE.Vector3(
		-earthRadius * Math.sin(phi) * Math.cos(theta),
		earthRadius * Math.cos(phi),
		earthRadius * Math.sin(phi) * Math.sin(theta)
	);
}
