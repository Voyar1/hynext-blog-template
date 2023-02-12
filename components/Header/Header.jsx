import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { getCategories } from "@/services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href="/" className={styles.header__logo__item}>
            HYNEXT
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
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
      </div>
    </header>
  );
};

export default Header;
