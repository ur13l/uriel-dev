import AdminLayout from "../../_layout/admin-layout";
import PostsList from "../../_includes/admin/posts-list.js";
import { useState } from "react";
import { API } from "aws-amplify";
import { listBlogs, listCategorys } from "../../graphql/queries";
import PropTypes from "prop-types";
import { redirectIfNotAuthenticated } from "../../_utils/session";

const Dashboard = ({ blog, categories }) => {
  const [loading] = useState(false);
  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row self-center place-self-center container p-4">
        {loading && <div>Cargando...</div>}
        {!loading && blog && (
          <>
            {categories.map((category, key) => (
              <PostsList category={category} blog={blog.slug} key={key} />
            ))}
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  await redirectIfNotAuthenticated(req, res);
  const {
    data: {
      listBlogs: { items: blogs },
    },
  } = await API.graphql({ query: listBlogs });
  const {
    data: {
      listCategorys: { items: categories },
    },
  } = await API.graphql({ query: listCategorys });
  const blog = blogs.length ? blogs[0] : null;

  return { props: { blog, categories } };
};

Dashboard.propTypes = {
  blog: PropTypes.object,
  categories: PropTypes.array.isRequired,
};

export default Dashboard;
