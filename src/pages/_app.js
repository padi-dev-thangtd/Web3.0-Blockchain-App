import { Layout } from 'src/layouts/Layout';
import { ToastContainer } from 'react-toastify';
import 'src/styles/globals.css';
import { Fragment } from 'react';
import { Provider, useSelector } from 'react-redux';
import { persistor, makeStore } from 'src/app/store';
import { wrapper } from 'src/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useLoadingSelector } from 'src/app/store/slices/CommonSlice';
import Loading from 'src/modules/loading/Loading';

function MyApp({ Component, pageProps }) {
  const loading = useSelector(useLoadingSelector);
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {loading && <Loading />}
      <ToastContainer />
    </Fragment>
  );
}
// export default MyApp;
export default wrapper.withRedux(MyApp);
