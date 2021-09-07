import Auth from "@aws-amplify/auth";
import { AuthProvider } from "../_hooks/use-auth";
import Router from "next/router";
import PropTypes from "prop-types";
import { AlertProvider } from "../_hooks/use-alert";

const AdminLayout = ({ children }) => {
  const logout = () => {
    Auth.signOut()
      .then(() => {
        Router.push("/admin/login");
      })
      .catch((err) => {
        console.log("Error Signin out");
      });
  };
  return (
    <AlertProvider>
      <AuthProvider>
        <nav className="bg-white h-20 w-screen flex justify-center font-menu absolute">
          <div className="container flex justify-end align-center">
            <button
              className="cursor-pointer text-blue-dark focus:outline-none"
              onClick={logout}
            >
              Salir
            </button>
          </div>
        </nav>
        <main className="bg-white min-h-screen w-full flex justify-center">
          {children}
        </main>
      </AuthProvider>
    </AlertProvider>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AdminLayout;
