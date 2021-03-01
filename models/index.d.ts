import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly mainImage?: string;
  readonly posts?: (Post | null)[];
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog;
  readonly category?: Category;
  readonly content: string;
  readonly featuredImage?: string;
  readonly author?: Author;
  readonly tags?: (PostTag | null)[];
  readonly createdAt: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly mainImage: string;
  readonly posts?: (Post | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class Author {
  readonly id: string;
  readonly name: string;
  readonly lastname: string;
  readonly bio?: string;
  readonly image: string;
  readonly socialMedia?: (SocialMedia | null)[];
  readonly posts?: (Post | null)[];
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class SocialMedia {
  readonly id: string;
  readonly name: string;
  readonly link: string;
  readonly logo: string;
  readonly author?: Author;
  constructor(init: ModelInit<SocialMedia>);
  static copyOf(source: SocialMedia, mutator: (draft: MutableModel<SocialMedia>) => MutableModel<SocialMedia> | void): SocialMedia;
}

export declare class PostTag {
  readonly id: string;
  readonly post: Post;
  readonly tag: Tag;
  constructor(init: ModelInit<PostTag>);
  static copyOf(source: PostTag, mutator: (draft: MutableModel<PostTag>) => MutableModel<PostTag> | void): PostTag;
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly posts?: (PostTag | null)[];
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}