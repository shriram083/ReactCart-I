import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.menu}>
            <div className={styles.options}><Link to={'/women'}>Women</Link></div>
            <div className={styles.options}><Link to={'/Men'}>Men</Link></div>
            <div className={styles.options}><Link to={'/AboutUs'}>About Us</Link></div>
            <div className={styles.options}><Link to={'/CantactUs'}>Contact Us</Link></div>
            <div className={styles.options}><Link to={'/FAQs'}>FAQs</Link></div>
            <div className={styles.options}><Link to={'/Cart'}>Cart</Link></div>
        </div>
    </div>
  )
}

export default Navbar