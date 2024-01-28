import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar /> {/* Navbar appears on all routes */}
      <main>
        <Outlet /> {/* Child route components will be rendered here */}
      </main>
    </div>
  );
}
