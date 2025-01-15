// src/components/layout/Layout.tsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Navbar from './Navbar';
import AuthNavbar from './AuthNavbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {user ? <AuthNavbar /> : <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;