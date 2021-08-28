/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const uploadImage = /* GraphQL */ `
  query UploadImage($file: String!, $extension: String!) {
    uploadImage(file: $file, extension: $extension) {
      msg
      code
      data {
        errFiles
        succMap
      }
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      slug
      posts {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostTagByPost = /* GraphQL */ `
  query GetPostTagByPost(
    $postID: ID
    $tagID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostTagByPost(
      postID: $postID
      tagID: $tagID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        tagID
        tag {
          id
          name
          slug
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        post {
          id
          title
          blogID
          categoryID
          content
          featuredImage
          authorID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostTagByTag = /* GraphQL */ `
  query GetPostTagByTag(
    $tagID: ID
    $postID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostTagByTag_(
      tagID: $tagID
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        tagID
        tag {
          id
          name
          slug
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        post {
          id
          title
          blogID
          categoryID
          content
          featuredImage
          authorID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      mainImage
      slug
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          blogID
          categoryID
          content
          featuredImage
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mainImage
        slug
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      description
      mainImage
      slug
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          blogID
          categoryID
          content
          featuredImage
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        mainImage
        slug
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSocialMedia = /* GraphQL */ `
  query GetSocialMedia($id: ID!) {
    getSocialMedia(id: $id) {
      id
      name
      link
      logo
      authorID
      createdAt
      updatedAt
      author {
        id
        name
        lastname
        bio
        image
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const listSocialMedias = /* GraphQL */ `
  query ListSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialMedias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        logo
        authorID
        createdAt
        updatedAt
        author {
          id
          name
          lastname
          bio
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      name
      lastname
      bio
      image
      createdAt
      updatedAt
      socialMedia {
        items {
          id
          name
          link
          logo
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          title
          blogID
          categoryID
          content
          featuredImage
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastname
        bio
        image
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      categoryID
      content
      featuredImage
      authorID
      tags {
        items {
          id
          postID
          tagID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      blog {
        id
        name
        mainImage
        slug
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      category {
        id
        name
        description
        mainImage
        slug
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      author {
        id
        name
        lastname
        bio
        image
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        categoryID
        content
        featuredImage
        authorID
        tags {
          nextToken
        }
        createdAt
        updatedAt
        blog {
          id
          name
          mainImage
          slug
          createdAt
          updatedAt
        }
        category {
          id
          name
          description
          mainImage
          slug
          createdAt
          updatedAt
        }
        author {
          id
          name
          lastname
          bio
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostsByCreatedAt = /* GraphQL */ `
  query GetPostsByCreatedAt(
    $blogID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsByCreatedAt(
      blogID: $blogID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        blogID
        categoryID
        content
        featuredImage
        authorID
        tags {
          nextToken
        }
        createdAt
        updatedAt
        blog {
          id
          name
          mainImage
          slug
          createdAt
          updatedAt
        }
        category {
          id
          name
          description
          mainImage
          slug
          createdAt
          updatedAt
        }
        author {
          id
          name
          lastname
          bio
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostsByAuthor = /* GraphQL */ `
  query GetPostsByAuthor(
    $authorID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsByAuthor(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        blogID
        categoryID
        content
        featuredImage
        authorID
        tags {
          nextToken
        }
        createdAt
        updatedAt
        blog {
          id
          name
          mainImage
          slug
          createdAt
          updatedAt
        }
        category {
          id
          name
          description
          mainImage
          slug
          createdAt
          updatedAt
        }
        author {
          id
          name
          lastname
          bio
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPostsByCategory = /* GraphQL */ `
  query GetPostsByCategory(
    $categoryID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPostsByCategory(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        blogID
        categoryID
        content
        featuredImage
        authorID
        tags {
          nextToken
        }
        createdAt
        updatedAt
        blog {
          id
          name
          mainImage
          slug
          createdAt
          updatedAt
        }
        category {
          id
          name
          description
          mainImage
          slug
          createdAt
          updatedAt
        }
        author {
          id
          name
          lastname
          bio
          image
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
