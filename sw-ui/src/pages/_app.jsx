import Head from "next/head";
import { useRouter } from "next/router";
import { UserProvider } from "../context/UserContext";
import "../styles/style.scss";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showNavbar = router.pathname === "/login" ? false : true;
  return (
    <UserProvider>
      {showNavbar && <Layout />}
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
