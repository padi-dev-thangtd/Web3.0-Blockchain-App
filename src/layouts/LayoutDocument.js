import Head from 'next/head';
import React, { ReactNode } from 'react';

const LayoutDocument = ({ children, title = 'This is the default title' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <div> {children} </div>
    </div>
  );
};
export default LayoutDocument;
