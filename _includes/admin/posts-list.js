import Link from "next/link";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getPostsByCategory } from "../../graphql/queries";
import EntryItem from "./entry-item";

const PostsList = ({ category, blog }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (category?.id) {
      const getPosts = async () => {
        const {
          data: {
            getPostsByCategory: { items: posts },
          },
        } = await API.graphql(
          graphqlOperation(getPostsByCategory, {
            categoryID: category?.id,
          })
        );
        setPosts(posts);
      };
      getPosts();
    }
  }, [category]);

  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="flex">
        <h1 className="flex-grow text-2xl md:text-3xl text-blue-dark">
          {category.name}
        </h1>
        <Link href={`/admin/${blog}/${category?.slug}/new`}>
          <span className="font-menu underline cursor-pointer">Nueva</span>
        </Link>
      </div>
      <div className="py-4">
        <input
          className="p-2 border-b outline-none border-gray-400 appearance-none w-full rounded-none"
          type="search"
          placeholder="Buscar..."
        />
      </div>
      <div>
        <ul>
          {posts?.map((item, key) => (
            <EntryItem post={item} key={key} />
          ))}
        </ul>
      </div>
      <div className="flex w-full justify-center">
        <button className="font-menu underline">Más</button>
      </div>
    </div>
  );
};

PostsList.propTypes = {
  category: PropTypes.object.isRequired,
  blog: PropTypes.string.isRequired,
};

export default PostsList;
