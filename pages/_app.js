import "./index.css";
import { UFOProvider } from "../components/Provider";
import { EarthQuakeProvider } from "../components/EarthQuakes";
import { StoreProvider } from "../components/store/StateProvider";

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default MyApp;
