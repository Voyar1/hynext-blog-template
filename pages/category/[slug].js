import React from "react";
import styles from "./category.module.css";
import { CategoriesWidget, PostCard } from "@/components";
import { getCategories, getCategoryPost } from "@/services";
import { useRouter } from "next/router";
import { Loader } from "@/components";

const Category = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <div className={`${styles.categories__layout} container`}>
        <div className={styles.categories__layout__posts}>
          {posts.map((post) => {
            return <PostCard post={post.node} key={post.node.slug} />;
          })}
        </div>
        <div className={styles.categories__layout__sidebar}>
          <div className={styles.categories__layout__sidebar__container}>
            <CategoriesWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((category) => ({ params: { slug: category.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}
