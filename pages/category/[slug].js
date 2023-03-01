import React from "react";
import styles from "./category.module.css";
import { CategoriesWidget, PostCard } from "@/components";
import { getCategories, getCategoryDetails, getCategoryPost } from "@/services";
import { useRouter } from "next/router";
import { Loader } from "@/components";
import Head from "next/head";

const Category = ({ posts, categories }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>{`${categories[0].name} - improve your knowledge`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.categoriesLayout} container`}>
        <div className={styles.categoriesLayoutPosts}>
          {posts.map((post) => {
            return <PostCard post={post.node} key={post.node.slug} />;
          })}
        </div>
        <div className={styles.categoriesLayoutSidebar}>
          <div className={styles.categoriesLayoutSidebarContainer}>
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
    paths: categories.map((category) => ({
      params: { slug: category.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const categories = await getCategoryDetails(params.slug);
  return {
    props: { posts, categories },
  };
}
