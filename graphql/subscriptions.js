/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
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
  }
`;
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
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
  }
`;
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
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
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      name
      slug
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      name
      slug
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      name
      slug
      posts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
  }
`;
export const onCreateSocialMedia = /* GraphQL */ `
  subscription OnCreateSocialMedia {
    onCreateSocialMedia {
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
  }
`;
export const onUpdateSocialMedia = /* GraphQL */ `
  subscription OnUpdateSocialMedia {
    onUpdateSocialMedia {
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
  }
`;
export const onDeleteSocialMedia = /* GraphQL */ `
  subscription OnDeleteSocialMedia {
    onDeleteSocialMedia {
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
  }
`;
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
  }
`;
