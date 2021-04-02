import PropTypes from "prop-types";
const NewPost = ({ category, blog }) => {
  console.log(category, blog);
  return (
    <div>
      NUEVO {category} {blog}
    </div>
  );
};

NewPost.propTypes = {
  category: PropTypes.string.isRequired,
  blog: PropTypes.string.isRequired,
};

export default NewPost;
