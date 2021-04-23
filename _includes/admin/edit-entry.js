import PropTypes from "prop-types";
import { createElement, useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "../../models";
import { Category } from "../../models";
import Vditor from "vditor";
import { uploadImage } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const e = createElement;

/**TODO: Esto funciona, pero no entiendo bien por qué */
const handleImageUpload = async (file) => {
  const reader = new FileReader();
  let formdata = new FormData();

  formdata.append("files", file[0]);
  reader.onload = async ({ target: { result } }) => {
    let extension = file[0].name.split(".").pop().toLowerCase();
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

  //Guardar título en caché
  useEffect(() => {
    if (title) {
      localStorage.setItem(`${category.slug}-title-new`, title);
    }
  }, [title]);

  //Obtener título de caché
  useEffect(() => {
    const tls = localStorage.getItem(`${category.slug}-title-new`);
    if (tls) {
      setTitle(tls);
    }
  }, [category]);

  //Verificar instalación de Vditor
  useEffect(() => {
    if (category) {
      const vditor = new Vditor("vditor", {
        minHeight: 200,
        height: "auto",
        typewriterMode: false,
        mode: "ir",
        lang: "en_US",
        upload: {
          handler: handleImageUpload,
          url: async (files) => {
            debugger;
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

  return (
    <form className="w-full">
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
  blogSlug: PropTypes.string,
  categorySlug: PropTypes.string,
  postSlug: PropTypes.string,
};

export default EditEntry;
