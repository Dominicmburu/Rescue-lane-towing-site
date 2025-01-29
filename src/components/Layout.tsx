import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
