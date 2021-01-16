import "./index.css";
import { UFOProvider } from "../components/Provider";
import { EarthQuakeProvider } from "../components/EarthQuakes";

function MyApp({ Component, pageProps }) {
	return (
		<EarthQuakeProvider>
			<Component {...pageProps} />
		</EarthQuakeProvider>
	);
}

export default MyApp;
