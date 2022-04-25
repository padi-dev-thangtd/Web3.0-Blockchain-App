import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { wrapper } from 'src/app/store';
import { useLoadingSelector } from 'src/app/store/slices/CommonSlice';
import Loading from 'src/components/loading/Loading';
import { Layout } from 'src/layouts/Layout';
import 'src/styles/globals.css';

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
