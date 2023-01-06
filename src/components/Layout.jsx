import React from 'react';

// Layout
import Header from './Layout/Header';
import Footer from './Layout/Footer';

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
