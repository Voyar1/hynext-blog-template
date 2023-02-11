import React from "react";
import styles from "./postcard.module.css";
import { BsCalendarDate } from "react-icons/bs";
import moment from "moment/moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.post__card}>
      <div className={styles.post__card__image}>
        <img src={post.featuredImage.url} alt={post.title} />
      </div>
      <Link href={`/${post.slug}`}>
        <h1 className={styles.post__card__title}>{post.title}</h1>
      </Link>

      <div className={styles.post__card__info}>
        <span>{post.author.name}</span>
        <div className={styles.post__card__info__data}>
          <BsCalendarDate />
          <span>{moment(post.createdAt).format("MMM Do YYYY")}</span>
        </div>
      </div>
      <p className={styles.post__card__excerpt}>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
