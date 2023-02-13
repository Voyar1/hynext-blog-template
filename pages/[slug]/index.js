import { getPosts } from "@/services";
import React from "react";
import { getPostDetails } from "@/services";
import styles from "./post.module.css";
import { CategoriesWidget, PostDetail } from "@/components";

const PostDetails = ({ post }) => {
  return (
    <div className={`${styles.post__layout} container`}>
      <div className={styles.post__layout__content}>
        <PostDetail post={post} />
      </div>
      <div className={styles.post__layout__sidebar}>
        <div className={styles.post__layout__sidebar__container}>
          <CategoriesWidget />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postDetails = await getPostDetails(params.slug);

  return {
    props: { post: postDetails },
  };
}