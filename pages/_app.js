import "./index.css";
import { UFOProvider } from "../components/Provider";
import { EarthQuakeProvider } from "../components/EarthQuakes";
import { StateProvider } from "../components/store/StateProps";

function MyApp({ Component, pageProps }) {
	return (
		<StateProvider>
			<Component {...pageProps} />
		</StateProvider>
	);
}

export default MyApp;
