import "../styles/globals.css";
import Head from "next/head";
import Login from "../components/Login";
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Login />
      <Component {...pageProps} />
    </>
  );
}

export default App;
