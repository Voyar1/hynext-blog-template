import React, { useState, useEffect } from "react";
import styles from "./postwidget.module.css";
import { getRecentPosts, getRelatedPosts } from "@/services";
import moment from "moment";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getRelatedPosts(categories, slug).then((posts) => setRelatedPosts(posts));
    } else {
      getRecentPosts().then((posts) => setRelatedPosts(posts));
    }
  }, [slug, categories]);

  return (
    <div className={styles.posts__widget}>
      <div className={styles.posts__widget__title}>
        <span>{slug ? "Related Posts" : "Recent Posts"}</span>
      </div>
      <div className={styles.posts__widget__content}>
        {relatedPosts.map((post) => {
          return (
            <div
              className={styles.posts__widget__content__post}
              key={post.slug}
            >
              <div className={styles.posts__widget__content__image}>
                <img
                  src={post.featuredImage.url}
                  alt={post.title}
                  height="60px"
                  width="60px"
                />
              </div>
              <div className={styles.posts__widget__content__info}>
                <span className={styles.content__info__date}>
                  {moment(post.createdAt).format("MMM Do YYYY")}
                </span>
                <Link
                  href={`/${post.slug}`}
                  className={styles.content__info__title}
                >
                  <span>{post.title}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostWidget;
