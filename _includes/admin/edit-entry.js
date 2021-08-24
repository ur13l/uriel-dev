import PropTypes from "prop-types";
import { createElement, useEffect, useState } from "react";
import Vditor from "vditor";
import { listAuthors, uploadImage } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../../graphql/mutations";

const e = createElement;
let vditor;

/** It works, but I have no idea why */
const handleImageUpload = async (file) => {
  const reader = new FileReader();
  let formdata = new FormData();

  formdata.append("files", file[0]);
  reader.onload = async ({ target: { result } }) => {
    let extension = file[0].name.split(".").pop().toLowerCase();
    console.log(extension);
    const res = await API.graphql(
      graphqlOperation(uploadImage, { file: result, extension })
    );
    res.data.uploadImage.data.succMap = JSON.parse(
      res.data.uploadImage.data.succMap
    );
    let path = res.data.uploadImage.data.succMap.image;
    let name = file[0] && file[0].name;

    let succFileText = "";
    succFileText += `  \n![${name}](${path})`;
    document.execCommand("insertHTML", false, succFileText);
  };
  reader.readAsDataURL(file[0]);
};

const EditEntry = ({ blog, category, postSlug }) => {
  const [post, setPost] = useState();
  const [title, setTitle] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState();

  //Save title on localStoragee
  useEffect(() => {
    if (title) {
      localStorage.setItem(`${category.slug}-title-new`, title);
    }
  }, [title]);

  //Obtain title from localStorage
  useEffect(() => {
    const tls = localStorage.getItem(`${category.slug}-title-new`);
    if (tls) {
      setTitle(tls);
    }
  }, [category]);

  //Obtain list of authors
  useEffect(() => {
    const getAuthors = async () => {
      const {
        data: {
          listAuthors: { items },
        },
      } = await API.graphql({ query: listAuthors });
      if (items.length > 0) {
        setSelectedAuthor(items[0]);
      }
    };
    getAuthors();
  }, [category]);

  //Verify vditor functionallity
  useEffect(() => {
    if (category) {
      vditor = new Vditor("vditor", {
        minHeight: 200,
        height: "auto",
        typewriterMode: false,
        mode: "ir",
        lang: "en_US",
        upload: {
          handler: handleImageUpload,
          url: async (files) => {
            const res = await API.graphql({
              query: uploadImage,
              variables: { files: JSON.stringify(files) },
            });
            res.data.uploadImage.data.succMap = JSON.parse(
              res.data.uploadImage.data.succMap
            );
            return JSON.stringify(res.data.uploadImage);
          },
        },

        toolbarConfig: {
          hide: true,
          pin: false,
        },
        cache: {
          enable: true,
          id: `${category.slug}-new`,
        },
        style: "api",
      });
    }
  }, [category]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      content: vditor?.getValue(),
      blogID: blog.id,
      categoryID: category.id,
      featuredImage: "NONE",
      authorID: selectedAuthor?.id,
      createdAt: new Date(),
    };

    const res = await API.graphql({
      query: createPost,
      variables: { input: data },
    });
    console.log(res);
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex flex-col w-full">
        <h3 className="text-3xl text-blue-dark w-full">
          {category?.name || "Cargando..."}
        </h3>
        <input
          className="text-6xl w-full font-title outline-none appearance-none rounded-none"
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de entrada"
          value={title}
        ></input>
        <div id="vditor" />
        <input
          type="submit"
          value={"Guardar"}
          className="bg-blue-dark text-white w-full h-10 font-regular hover:bg-blue transition-colors cursor-pointer mb-10"
        />
      </div>
    </form>
  );
};

EditEntry.propTypes = {
  blog: PropTypes.object,
  category: PropTypes.object,
  postSlug: PropTypes.string,
};

export default EditEntry;
