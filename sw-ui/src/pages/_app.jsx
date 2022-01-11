import { useRouter } from "next/router";
import { UserProvider } from "../context/UserContext";
import Layout from "components/Layout";
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showNavbar = router.pathname !== "/login";
  return (
    <UserProvider>
      {showNavbar ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </UserProvider>
  );
}

export default MyApp;
