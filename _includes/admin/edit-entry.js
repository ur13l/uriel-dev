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
  reader.onload = async () => {
    const res = await API.graphql(
      graphqlOperation(uploadImage, { files: JSON.stringify(formdata) })
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

const EditEntry = ({ blogSlug, categorySlug, postSlug }) => {
  const [blog, setBlog] = useState();
  const [category, setCategory] = useState();
  const [post, setPost] = useState();
  const [showSave, setShowSave] = useState(false);
  const [title, setTitle] = useState("");

  //Obtener información del blog a partir de slug
  useEffect(() => {
    if (blogSlug) {
      DataStore.query(Blog)
        .then((r) => r.filter((b) => b.slug === blogSlug)[0])
        .then((b) => setBlog(b));
    }
  }, [blogSlug]);

  //Obtener información de la categoría a partir del slug
  useEffect(() => {
    if (categorySlug) {
      DataStore.query(Category)
        .then((r) => r.filter((c) => c.slug === categorySlug)[0])
        .then((c) => setCategory(c));
    }
  }, [categorySlug]);

  //Guardar título en caché
  useEffect(() => {
    if (title) {
      localStorage.setItem(`${categorySlug}-title-new`, title);
    }
  }, [title]);

  //Obtener título de caché
  useEffect(() => {
    const tls = localStorage.getItem(`${categorySlug}-title-new`);
    if (tls) {
      setTitle(tls);
    }
  }, [categorySlug]);

  //Verificar si ya se tienen blog y categoría para mostrar el botón de guardar
  useEffect(() => {
    if (blog && category) {
      setShowSave(true);
    }
  }, [blog, category]);

  //Verificar instalación de Vditor
  useEffect(() => {
    if (categorySlug) {
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
            console.log(files);
            const res = await API.graphql(
              graphqlOperation(uploadImage, { files: JSON.stringify(files) })
            );
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
          id: `${categorySlug}-new`,
        },
        style: "api",
      });
    }
  }, [categorySlug]);

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
        {showSave && (
          <input
            type="submit"
            value={"Guardar"}
            className="bg-blue-dark text-white w-full h-10 font-regular hover:bg-blue transition-colors cursor-pointer mb-10"
          />
        )}
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
