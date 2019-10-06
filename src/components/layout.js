import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withPrefix, Link } from "gatsby"

import '../assets/sass/main.scss';
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Estelle & Brynn are getting hitched' },
            { name: 'keywords', content: 'site, web' },
          ]}
        >
          <html lang="en" />
          
          }
        </Helmet>
        <div>{children}</div>
        <script src="../static/mobileMenu.js" type="text/javascript" />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
