import { useState, useEffect, useReducer, createContext } from "react";

const EarthQuakeContext = createContext();

const EarthQuakeProvider = (props) => {
	const QueryURL =
		"https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

	const [quakeData, setData] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetch(QueryURL).then((res) => res.json());
				console.log(data);
				setData(data);
			} catch (e) {
				setError(true);
				console.log(e);
			}
		};

		getData();
	}, []);
	return <EarthQuakeContext.Provider value={{ quakeData, error }}>{props.children}</EarthQuakeContext.Provider>;
};

export { EarthQuakeContext, EarthQuakeProvider };
