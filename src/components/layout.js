import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, withPrefix } from 'gatsby';

import Header from './header/header';
import Footer from './footer/footer';

import '../main.scss';

const query = graphql`
   query SiteTitleQuery {
      site {
         siteMetadata {
            title
         }
      }
   }
`;

const Layout = ({ children, location }) => (
   <StaticQuery
      query={query}
      render={data => (
         <div>
            <Helmet htmlAttributes={{ lang: 'en-US' }}>
               <title>{data.site.siteMetadata.title}</title>
               <meta
                  name="description"
                  content="The website of Aurelio De Rosa, a full-stack Web developer, jQuery team member, author, and speaker"
               />
               <link rel="icon" href={withPrefix('/images/favicon.ico')} />
               <link rel="apple-touch-icon" href={withPrefix('/images/audero-logo.png')} />
               <meta name="theme-color" content="#F8F9FA" />
               <meta
                  name="google-site-verification"
                  content="ismb3XGlL6apIUwFNBQSKLNEqz5BAPqEZFZWXy1uUGM"
               />
            </Helmet>
            <Header
               siteTitle={data.site.siteMetadata.title}
               currentPage={location.pathname}
            />
            {children}
            <Footer />
         </div>
      )}
   />
);

Layout.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
   ]),
   location: PropTypes.object
};

export default Layout;
