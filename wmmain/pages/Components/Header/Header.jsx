import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">My Logo</Link>
      </div>
      <button className={styles.toggle} onClick={handleMenuClick}>
        <span className={styles.icon}></span>
      </button>
      <nav className={menuOpen ? styles.navOpen : styles.navClosed}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
