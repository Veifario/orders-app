import { Navigate } from "react-router-dom";

import { isSignedIn } from "@/helpers/auth.helper";

const Login = () => {
  if (isSignedIn()) {
    return <Navigate to="/" />;
  }

  return <div>Login Page</div>;
};

export default Login;
