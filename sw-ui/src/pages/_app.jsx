import { useRouter } from "next/router";
import { UserProvider } from "../context/UserContext";
import Layout from "components/Layout";
import "../styles/style.scss";
import { AppProvider } from "context/AppContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showNavbar = router.pathname !== "/login";
  return (
    <UserProvider>
      <AppProvider>
        {showNavbar ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </AppProvider>
    </UserProvider>
  );
}

export default MyApp;
