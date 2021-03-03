import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children, pageTitle }) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <main>
          <title>{ pageTitle }</title>
          <p>{ data.site.siteMetadata.title }</p>
          <Navbar />
          <h1>{ pageTitle }</h1>
          { children }
        </main>
    );
};

export default Layout;