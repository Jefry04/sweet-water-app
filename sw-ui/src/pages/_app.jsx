import { UserProvider } from "../context/UserContext";
import "../styles/style.scss"

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />{" "}
    </UserProvider>
  );
}

export default MyApp;
