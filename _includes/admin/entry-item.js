import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const EntryItem = ({ post: { id, title, slug } }) => {
  const deletePost = () => {
    console.log("eliminando " + id + " " + title);
  };
  return (
    <div className="flex align-items-center">
      <h2 className="flex-grow text-3xl pointer">
        <Link href={`/admin/edit/${id}`}>{title}</Link>
      </h2>
      <p
        className="text-blue-dark underline flex-shrink pointer"
        onClick={deletePost}
      >
        Eliminar
      </p>
    </div>
  );
};

EntryItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default EntryItem;
