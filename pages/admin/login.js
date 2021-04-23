import Input from "../../_includes/input";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import Router from "next/router";
import { redirectIfAuthenticated } from "../../_utils/session";

const Login = ({}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { email: username, password } = formData;
    try {
      const user = await Auth.signIn(username, password);
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        await Auth.completeNewPassword(user, password);
      }
      setLoading(false);
      Router.push("/admin/dashboard");
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <main className="flex relative items-center align-middle justify-center bg-white h-screen w-screen">
      <div className="absolute z-0 md:bg-blue-light md:h-1/2 md:w-1/2 lg:1/3 md:transform md:skew-x-3 md:rotate-3 md:skew-y-5" />
      <div className="flex flex-col justify-center z-10 w-full p-8 md:h-1/2 md:w-1/3 ">
        <h1 className="text-center text-blue-dark text-6xl mb-12">Acceso</h1>
        <form onSubmit={onSubmit}>
          <Input
            name="email"
            label="Correo electrónico:"
            type="email"
            onChange={onChange}
          />
          <Input
            name="password"
            label="Contraseña:"
            type="password"
            onChange={onChange}
          />
          <input
            type="submit"
            value={loading ? "Accediendo..." : "Iniciar sesión"}
            className="bg-blue-dark text-white w-full h-10 font-regular hover:bg-blue transition-colors cursor-pointer mb-10"
          />
          {error && <p className="text-red">{error}</p>}
        </form>
      </div>
    </main>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  return await redirectIfAuthenticated(req, res);
};

export default Login;
