import { getCategories } from "@/services";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./categorieswidget.module.css";

const CategoriesWidget = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className={styles.categories__widget}>
      <div className={styles.categories__widget__title}>
        <span>Categories</span>
      </div>
      <div className={styles.categories__widget__content}>
        {categories.map((category) => {
          return (
            <Link
              href={`/category/${category.slug}`}
              className={styles.content__title}
              key={category.slug}
            >
              <span>{category.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesWidget;
