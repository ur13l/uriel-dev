import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const EntryItem = ({ post, onDelete = () => null }) => {
  const { id, title } = post;
  const deletePost = () => {
    onDelete(post);
  };

  return (
    <div className="flex align-items-center mb-6">
      <h2 className="flex-grow text-3xl cursor-pointer">
        <Link href={`/admin/edit/${id}`}>{title}</Link>
      </h2>
      <p
        className="text-blue-dark underline flex-shrink cursor-pointer"
        onClick={deletePost}
      >
        Eliminar
      </p>
    </div>
  );
};

EntryItem.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

EntryItem.defaultValues = {
  onDelete: () => null,
};

export default EntryItem;
