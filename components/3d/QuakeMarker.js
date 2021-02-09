import { useRef, useState } from "react";
import { Box, Html } from "drei";

const QuakeMarker = ({ quakePoint, earthRadius }) => {
	//console.log(quakePoint);
	const mesh = useRef();
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);

	const { id, properties, geometry } = quakePoint;
	const [longitude, latitude, _] = geometry.coordinates;

	const { title, mag, time } = properties;

	let latRadius = latitude * (Math.PI / 180);
	let lonRadius = -longitude * (Math.PI / 180);

	let x = Math.cos(latRadius) * Math.cos(lonRadius) * (earthRadius + 0.1);
	let y = Math.sin(latRadius) * (earthRadius + 0.1);
	let z = Math.cos(latRadius) * Math.sin(lonRadius) * (earthRadius + 0.1);

	return (
		<group>
			<Box
				args={[0.1, 0.1, 0.1]}
				position={[x, y, z]}
				ref={mesh}
				// scale={active ? [6, 6, 6] : [5, 5, 5]}
				onClick={() => setActive(!active)}
				onPointerOver={() => setHover(true)}
				onPointerOut={() => setHover(false)}
			>
				<meshStandardMaterial attach='material' color={hovered ? "#2b6c76" : "#720b23"} />
			</Box>
			{hovered && (
				<Html>
					<div className={"markerContainer"}>
						{title}
						<h1>{title}</h1>
						<p>{mag}</p>
						<p>{time}</p>
					</div>
				</Html>
			)}
		</group>
	);
};

export default QuakeMarker;
