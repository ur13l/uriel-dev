import AdminLayout from "../../../../_layout/admin-layout";
import EditEntry from "../../../../_includes/admin/edit-entry";
import { useRouter } from "next/router";

const NewPost = () => {
  const router = useRouter();
  const { category, blog } = router.query;

  return (
    <AdminLayout>
      <div className="flex flex-col md:flex-row container p-4 mt-16">
        {/* {loading && <div>Cargando...</div>} */}
        <EditEntry categorySlug={category} blogSlug={blog} />
      </div>
    </AdminLayout>
  );
};

export default NewPost;
