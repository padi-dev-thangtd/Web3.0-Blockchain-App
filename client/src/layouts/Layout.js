import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIsLoggedIn } from 'src/modules/auth/AuthSlice';
import jwt_decode from 'jwt-decode';
import { useErrorSelector } from 'src/app/store/slices/CommonSlice';
// import { Footer } from 'src/components/Footer/Footer';
// import { Header } from 'src/components/Header/Header';
// import { HIDDEN_HEADER } from 'src/constants/RenderLayout';
// import { checkPathname } from 'src/utils/checkPathname';

export const Layout = ({ children, title = 'This is the default title' }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // console.log({ isLoggedIn });
  // detect login
  useEffect(() => {
    const token = Cookies.get('access_token');
    const is_candidate = Cookies.get('is_candidate');
    if (token) {
      if (!is_candidate) {
        return dispatch(changeIsLoggedIn(true));
      } else {
        try {
          const decoded = jwt_decode(token);
          if (decoded.exp > Date.now() / 1000) {
            return dispatch(changeIsLoggedIn(true));
          }
          return dispatch(changeIsLoggedIn(false));
        } catch (error) {
          return dispatch(changeIsLoggedIn(false));
        }
      }
    }
  }, [Cookies, router]);
  // detect maintain
  // useEffect(() => {
  //   if (
  //     (process.env.REACT_APP_MAINTAIN === 'true' ||
  //       process.env.REACT_APP_MAINTAIN === true) &&
  //       router.asPath !== RouteConstant.Maintain
  //   ) {
  //     // window.location.href = "http://www.w3schools.com";
  //     return router.push(RouteConstant.Maintain);
  //   }
  // }, [router]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div className="layout-app">
        {/* {!checkPathname(HIDDEN_HEADER, router.pathname) && <Header />} */}
        <main>{children}</main>
        {/* {!checkPathname(HIDDEN_HEADER, router.pathname) && <Footer />} */}

        <style jsx={true}>{``}</style>
      </div>
    </>
  );
};
