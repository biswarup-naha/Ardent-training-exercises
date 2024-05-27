import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
function Navbar() {
  return (
    <>
    <nav className={styles.nav}>
    <Link className={styles.link} to="/">Home</Link>
    <Link className={styles.link} to="/about">View Employees</Link>
    <Link className={styles.link} to="/contact">Add New Employee</Link>
    <Link className={styles.link} to="">Services</Link>
    </nav>

    </>
  )
}

export default Navbar;