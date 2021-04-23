// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Category, Author, SocialMedia, PostTag, Tag, ImageResponse, DataResponse } = initSchema(schema);

export {
  Blog,
  Post,
  Category,
  Author,
  SocialMedia,
  PostTag,
  Tag,
  ImageResponse,
  DataResponse
};