import Head from "next/head";
import styles from "./index.module.css";
import { PostCard, PostWidget, CategoriesWidget } from "@/components";
import moment from "moment";
import { getPosts } from "@/services";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Next/Hygraph blog!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.main__layout} container`}>
        <div className={styles.main__layout__posts}>
          {posts.map((post) => {
            return <PostCard post={post} key={post.slug} />;
          })}
        </div>
        <div className={styles.main__layout__sidebar}>
          <div className={styles.main__layout__sidebar__container}>
            <PostWidget />
            <CategoriesWidget />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
