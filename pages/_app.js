

export default function App({ Component, pageProps }) {

const client = new ApolloClient

  return <Component {...pageProps} />;
}