import { useState, useEffect, useReducer, createContext } from "react";

const UFOContext = createContext();

const UFOProvider = (props) => {
	const QueryURL =
		"https://api.data.world/v0/queries/222788f0-603e-40dc-bc32-689fe52d1774/results?includeTableSchema=false";
	const API_KEY = ``;

	const [ufoData, setData] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetch(QueryURL, {
					headers: {
						Authorization: `Bearer ${API_KEY}`,
					},
				}).then((res) => res.json());
				console.log(data);
				setData(data);
			} catch (e) {
				setError(true);
				console.log(e);
			}
		};

		getData();
	}, []);
	return <UFOContext.Provider value={{ ufoData, error }}>{props.children}</UFOContext.Provider>;
};

export { UFOContext, UFOProvider };
