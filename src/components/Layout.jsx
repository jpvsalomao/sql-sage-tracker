import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 SQL Learning Platform</p>
      </footer>
    </div>
  );
};

export default Layout;