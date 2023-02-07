import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const RANDOM_DATA_CAT = [
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Next",
    slug: "next",
  },
  {
    name: "Vanilla Js",
    slug: "vanilla-js",
  },
];

const Header = () => {
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
            {RANDOM_DATA_CAT.map((cat) => {
              return (
                <li key={cat.slug} className={styles.navigation__item}>
                  <Link href={cat.slug} className={styles.navigation__link}>
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
