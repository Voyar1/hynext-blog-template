import { request, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query Posts {
      posts {
        createdAt
        excerpt
        featuredPost
        id
        publishedAt
        slug
        title
        updatedAt
        featuredImage {
          url
        }
        author {
          name
          bio
          id
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getRecentPosts = async () => {
  console.log(graphqlAPI);
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }  
  }`;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getRelatedPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        slug
        name
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};
