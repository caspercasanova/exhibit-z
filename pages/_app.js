import "./index.css";

import { StoreProvider } from "../components/store/StateProvider";

function MyApp({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default MyApp;
