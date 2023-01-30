import React from 'react';

// Layout
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import zogi from './../assets/zogi_o_ddae.mp4';

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div className="mt-10 py-10 bg-gray-100 border-t border-gray-400 flex justify-center">
        <video controls src={zogi}></video>
      </div>
    </>
  );
}

export default Layout;
