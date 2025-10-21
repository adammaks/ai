import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Navbar.scss';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/about', label: 'Обо мне' },
  { to: '/contact', label: 'Контакты' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="navbar glass"
    >
      <div className="nav-content">
        <Logo size={38} />
        <div className="nav-links">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={pathname === link.to ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
