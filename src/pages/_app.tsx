import { Header } from '../components/Header';
import '../styles/global.scss';
import { Provider as NextAuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
