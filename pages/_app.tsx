import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
