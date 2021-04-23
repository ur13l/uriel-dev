import { withSSRContext } from "aws-amplify";

export const redirectIfNotAuthenticated = async (req, res) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
  } catch (err) {
    res.writeHead(302, { Location: "/admin/login" });
    res.end();
  }
  return {
    props: {
      authenticated: "who-knows",
    },
  };
};

export const redirectIfAuthenticated = async (req, res) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    res.writeHead(302, { Location: "/admin/dashboard" });
    res.end();
  } catch (err) {}
  return {
    props: {
      authenticated: "who-knows",
    },
  };
};
