import Link from "next/link";
import PropTypes from "prop-types";

const PostsList = ({ title, category, blog }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="flex">
        <h1 className="flex-grow text-2xl md:text-3xl text-blue-dark">
          {title}
        </h1>
        <Link href={`/admin/${blog}/${category}/new`}>
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
      <div className="w-full h-20">{category}</div>
      <div className="flex w-full justify-center">
        <button className="font-menu underline">Más</button>
      </div>
    </div>
  );
};

PostsList.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
};

export default PostsList;
