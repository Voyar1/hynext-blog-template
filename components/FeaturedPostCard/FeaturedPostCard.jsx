import React from "react";
import moment from "moment";
import styles from "./featuredpostcard.module.css";
import Link from "next/link";
import Image from "next/image";

const FeaturedPostCard = ({ post }) => (
  <div className={styles.featuredPostCard}>
    <Image
      className={styles.featuredPostCardBg}
      // style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      src={post.featuredImage.url}
      priority
      width={150}
      height={100}
      alt={post.title}
      // as="image"
      // height={200}
      // width={200}
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
