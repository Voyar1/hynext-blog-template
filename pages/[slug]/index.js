import { getPosts } from "@/services";
import React from "react";
import { getPostDetails } from "@/services";
import styles from "./post.module.css";
import {
  CategoriesWidget,
  PostDetail,
  Author,
  PostWidget,
  CommentForm,
  Comments,
} from "@/components";
import { useRouter } from "next/router";
import { Loader } from "@/components";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className={`${styles.post__layout} container`}>
      <div className={styles.post__layout__content}>
        <PostDetail post={post} />
        <Author author={post.author} />
        <CommentForm slug={post.slug} />
        <Comments slug={post.slug} />
      </div>
      <div className={styles.post__layout__sidebar}>
        <div className={styles.post__layout__sidebar__container}>
          <PostWidget
            categories={post.categories.map((category) => category.slug)}
            slug={post.slug}
          />
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
