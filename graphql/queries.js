/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const uploadImage = /* GraphQL */ `
  query UploadImage($files: String!) {
    uploadImage(files: $files) {
      msg
      code
      data {
        errFiles
        succMap
      }
    }
  }
`;
export const syncPostTags = /* GraphQL */ `
  query SyncPostTags(
    $filter: ModelPostTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postID
        tagID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        mainImage
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        mainImage
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      author {
        id
        name
        lastname
        bio
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSocialMedias = /* GraphQL */ `
  query SyncSocialMedias(
    $filter: ModelSocialMediaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSocialMedias(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        link
        logo
        authorID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      socialMedia {
        nextToken
        startedAt
      }
      posts {
        nextToken
        startedAt
      }
    }
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        lastname
        bio
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
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
        nextToken
        startedAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      blog {
        id
        name
        mainImage
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        mainImage
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      author {
        id
        name
        lastname
        bio
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
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
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
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
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
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
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        blogID
        categoryID
        content
        featuredImage
        authorID
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
