import React from "react";
import moment from "moment";
import styles from "./featuredpostcard.module.css";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className={styles.featuredPostCard}>
    <div
      className={styles.featuredPostCardBg}
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className={styles.overlay} />
    <div className={styles.postCardInfo}>
      <p className={styles.postCardDate}>
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className={styles.postCardTitle}>{post.title}</p>
      <div className={styles.author}>
        <p>{post.author.name}</p>
      </div>
    </div>
    <Link href={`/${post.slug}`}>
      <span className={styles.linkOverlay}>{post.title}</span>
    </Link>
  </div>
);

export default FeaturedPostCard;
