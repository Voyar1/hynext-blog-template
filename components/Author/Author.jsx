import styles from "./author.module.css";
import React from "react";
import { BsFillAwardFill } from "react-icons/bs";

const Author = ({ author }) => {
  return (
    <div className={styles.authorCard}>
      <div className={styles.authorCardIcon}>
        <BsFillAwardFill />
      </div>
      <h3 className={styles.authorName}>{author.name}</h3>
      <p className={styles.authorBio}>{author.bio}</p>
    </div>
  );
};

export default Author;
