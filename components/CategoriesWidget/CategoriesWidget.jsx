import React from "react";
import styles from "./categorieswidget.module.css";

const CategoriesWidget = () => {
  return (
    <div className={styles.categories__widget}>
      <div className={styles.categories__widget__title}>
        <span>Categories</span>
      </div>
      <div className={styles.categories__widget__content}>
        <span>Web Dev</span>
        <span>Web Dev</span>
        <span>Web Dev</span>
      </div>
    </div>
  );
};

export default CategoriesWidget;
