import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children, pageTitle }) => (
    <main>
      <title>{ pageTitle }</title>
      <h1>{ pageTitle }</h1>
      <Navbar />
      { children }
    </main>
);

export default Layout;