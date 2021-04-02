import AdminLayout from "../../_layout/admin-layout";
import PostsList from "../../_includes/admin/posts-list.js";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "../../models";
import { Category } from "../../models";
import { useEffect, useState } from "react";
import { useElementScroll } from "framer-motion";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    setBlog((await DataStore.query(Blog))[0]);
  }, []);

  useEffect(async () => {
    setCategories(await DataStore.query(Category));
  }, []);

  useEffect(() => {
    if (blog) {
      setLoading(false);
    }
  }, [blog]);
  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row self-center place-self-center container p-4">
        {loading && <div>Cargando...</div>}
        {!loading && blog && (
          <>
            {categories.map((category, key) => (
              <PostsList
                title={category.name}
                category={category.slug}
                blog={blog.slug}
              />
            ))}
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
