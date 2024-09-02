import { Link } from "react-router-dom";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div>
      <div>
        <div className="text-3xl font-extrabold text-center pb-2">
          {type === "signup"
            ? "Create your account"
            : "Signin into your account"}
        </div>
        <div className="text-slate-400 text-center">
          {type === "signin"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to={type === "signin" ? "/signup" : "/signin"}
            className="font-bold text-primary pl-2 underline"
          >
            {type === "signin" ? "Signup" : "Signin"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
