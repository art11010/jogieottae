import React from 'react';

// Layout
import Header from './Admin/Header';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
