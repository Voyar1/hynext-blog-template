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
    <div className={styles.categoriesWidget}>
      <div className={styles.categoriesWidgetTitle}>
        <span>Categories</span>
      </div>
      <div className={styles.categoriesWidgetContent}>
        {categories.map((category) => {
          return (
            <Link
              href={`/category/${category.slug}`}
              className={styles.contentTitle}
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
