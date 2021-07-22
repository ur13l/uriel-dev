import AdminLayout from "../../../../_layout/admin-layout";
import EditEntry from "../../../../_includes/admin/edit-entry";
import { listCategorys, listBlogs } from "../../../../graphql/queries";
import { API } from "aws-amplify";
import PropTypes from "prop-types";
import { redirectIfNotAuthenticated } from "../../../../_utils/session";

const NewPost = ({ blog, category }) => {
  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row container p-4 mt-16">
        <EditEntry category={category} blog={blog} />
      </div>
    </AdminLayout>
  );
};

export const getServerSideProps = async ({ params, req, res }) => {
  await redirectIfNotAuthenticated(req, res);
  const {
    data: {
      listBlogs: { items: blogs },
    },
  } = await API.graphql({
    query: listBlogs,
    variables: { filter: { slug: { eq: params.blog } } },
  });

  const {
    data: {
      listCategorys: { items: categories },
    },
  } = await API.graphql({
    query: listCategorys,
    variables: { filter: { slug: { eq: params.category } } },
  });
  const blog = blogs.length ? blogs[0] : null;
  const category = categories.length ? categories[0] : null;

  return { props: { blog, category } };
};

NewPost.propTypes = {
  blog: PropTypes.object,
  category: PropTypes.object,
};

export default NewPost;
