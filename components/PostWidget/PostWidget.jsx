import React from "react";
import styles from "./postwidget.module.css";

const PostWidget = ({ posts }) => {
  return (
    <div className={styles.posts__widget}>
      <div className={styles.posts__widget__title}>
        <span>Recent Posts</span>
      </div>
      <div className={styles.posts__widget__content}>
        {posts.map((post) => {
          return (
            <div className={styles.posts__widget__content__post}>
              <div className={styles.posts__widget__content__image}>
                <img
                  src={post.img}
                  alt={post.title}
                  height="60px"
                  width="60px"
                />
              </div>
              <div className={styles.posts__widget__content__info}>
                <span className={styles.content__info__date}>{post.date}</span>
                <span>{post.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostWidget;
