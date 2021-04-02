/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPostTag = /* GraphQL */ `
  mutation CreatePostTag(
    $input: CreatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    createPostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      tag {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const updatePostTag = /* GraphQL */ `
  mutation UpdatePostTag(
    $input: UpdatePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    updatePostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      tag {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const deletePostTag = /* GraphQL */ `
  mutation DeletePostTag(
    $input: DeletePostTagInput!
    $condition: ModelPostTagConditionInput
  ) {
    deletePostTag(input: $input, condition: $condition) {
      id
      postID
      tagID
      tag {
        id
        name
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSocialMedia = /* GraphQL */ `
  mutation CreateSocialMedia(
    $input: CreateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    createSocialMedia(input: $input, condition: $condition) {
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
export const updateSocialMedia = /* GraphQL */ `
  mutation UpdateSocialMedia(
    $input: UpdateSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    updateSocialMedia(input: $input, condition: $condition) {
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
export const deleteSocialMedia = /* GraphQL */ `
  mutation DeleteSocialMedia(
    $input: DeleteSocialMediaInput!
    $condition: ModelSocialMediaConditionInput
  ) {
    deleteSocialMedia(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
