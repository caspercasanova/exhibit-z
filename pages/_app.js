import "./index.scss";

import { StoreProvider } from "../components/store/StateProvider";
import { ManagedUIContext } from "../components/ui/context";

function MyApp({ Component, pageProps }) {
	return (
		<ManagedUIContext>
			<StoreProvider>
				<Component {...pageProps} />
			</StoreProvider>
		</ManagedUIContext>
	);
}

export default MyApp;
