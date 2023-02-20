import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { getCategories } from "@/services";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const toggleNavHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/" className={styles.header__logo__item}>
            HYNEXT
          </Link>
        </div>
        <nav
          className={`${styles.navigation} ${navOpen ? styles.navActive : ""}`}
        >
          <ul className={styles.navigation__list}>
            <button className={styles.closeBtn} onClick={toggleNavHandler}>
              <FaTimes />
            </button>
            {categories.map((cat) => {
              return (
                <li key={cat.slug} className={styles.navigation__item}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className={styles.navigation__link}
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className={`${styles.hamburger} ${
            navOpen ? styles.hamburgerNone : ""
          }`}
          onClick={toggleNavHandler}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
