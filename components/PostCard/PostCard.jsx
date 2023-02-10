import React from "react";
import styles from "./postcard.module.css";
import { BsCalendarDate } from "react-icons/bs";

const PostCard = ({ post }) => {
  return (
    <div className={styles.post__card}>
      <div className={styles.post__card__image}>
        <img src={post.img} alt={post.title} />
      </div>
      <h1 className={styles.post__card__title}>{post.title}</h1>
      <div className={styles.post__card__info}>
        <span>{post.author}</span>
        <div className={styles.post__card__info__data}>
          <BsCalendarDate />
          <span>{post.date}</span>
        </div>
      </div>
      <p className={styles.post__card__excerpt}>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
