import Link from "next/link";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { getPostsByCategory } from "../../graphql/queries";
import EntryItem from "./entry-item";
import Dialog from "../common/dialog";
import { deletePost } from "../../graphql/mutations";
import { useAlertContext } from "../../_hooks/use-alert";

const PostsList = ({ category, blog }) => {
  const [posts, setPosts] = useState([]);
  const [postToDelete, setPostToDelete] = useState();
  const [search, setSearch] = useState("");
  const { displayAlert } = useAlertContext();

  //Function to dismiss the delete dialog.
  const dismissDialog = () => {
    setPostToDelete(undefined);
  };

  //Removing the post calling the deletePost API service.
  const removePost = async () => {
    try {
      await API.graphql(
        graphqlOperation(deletePost, { input: { id: postToDelete.id } })
      );
      setPosts(posts.filter((p) => p.id !== postToDelete.id));
      setPostToDelete(undefined);
      displayAlert("Entrada eliminada exitosamente");
    } catch (e) {
      setPostToDelete(undefined);
      displayAlert(
        "Hubo un error al eliminar la entrada, intenta más adelante",
        5000,
        "red-500"
      );
    }
  };

  /**
   * As the page receives the category ID, we call the service to retrieve all of the posts
   * related to that category.
   */
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

  /**
   * Effect that handles the writing on the search bar to display the correct posts.
   */
  useEffect(() => {
    const filterPosts = async () => {
      if (search) {
        const {
          data: {
            getPostsByCategory: { items: posts },
          },
        } = await API.graphql(
          graphqlOperation(getPostsByCategory, {
            categoryID: category?.id,
            filter: {
              searchValue: {
                contains: search
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, ""),
              },
            },
          })
        );
        setPosts(posts);
      }
    };
    filterPosts();
  }, [search]);

  return (
    <>
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul>
            {posts?.map((item, key) => (
              <EntryItem post={item} key={key} onDelete={setPostToDelete} />
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-center">
          <button className="font-menu underline">Más</button>
        </div>
      </div>

      <Dialog
        title="¿Deseas eliminar la entrada?"
        content={`¿Estás seguro de eliminar la entrada ${postToDelete?.title}?`}
        cancelButtonText="Cancelar"
        acceptButtonText="Eliminar"
        acceptButtonColor="bg-red-600"
        acceptButtonColorHover="bg-red-800"
        display={postToDelete}
        onCancel={dismissDialog}
        onAccept={removePost}
      />
    </>
  );
};

PostsList.propTypes = {
  category: PropTypes.object.isRequired,
  blog: PropTypes.string.isRequired,
};

export default PostsList;
