import App, { Container } from 'next/app';

import AppProvider from '../components/Context/AppProvider';
import Layout from '../components/Layout';
import React from 'react';
import { compose } from 'recompose';
import defaultPage from '../hocs/defaultPage';
import withData from '../lib/apollo';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <Container>
        <AppProvider>
          <Layout isAuthenticated={isAuthenticated} {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
        <style jsx global>
          {`
            a {
              color: white !important;
            }
            a:link {
              text-decoration: none !important;
              color: white !important;
            }
            a:hover {
              color: white;
            }
            .card {
              display: inline-block !important;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </Container>
    );
  }
}
export default withData(MyApp);
