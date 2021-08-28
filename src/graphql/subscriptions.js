/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        mainImage
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      author {
        id
        name
        lastname
        bio
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
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
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        mainImage
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      author {
        id
        name
        lastname
        bio
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
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
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        name
        description
        mainImage
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      author {
        id
        name
        lastname
        bio
        image
        posts {
          nextToken
        }
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
      }
    }
  }
`;
export const onCreatePostTag = /* GraphQL */ `
  subscription OnCreatePostTag {
    onCreatePostTag {
      id
      postID
      tagID
      post {
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
      tag {
        id
        name
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePostTag = /* GraphQL */ `
  subscription OnUpdatePostTag {
    onUpdatePostTag {
      id
      postID
      tagID
      post {
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
      tag {
        id
        name
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePostTag = /* GraphQL */ `
  subscription OnDeletePostTag {
    onDeletePostTag {
      id
      postID
      tagID
      post {
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
      tag {
        id
        name
        slug
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      mainImage
      slug
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
        posts {
          nextToken
        }
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
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
        posts {
          nextToken
        }
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
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
        posts {
          nextToken
        }
        createdAt
        updatedAt
        socialMedia {
          nextToken
        }
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
    }
  }
`;
