import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-2/3 p-3 bg-indigo-500 rounded-lg">
      <div className="text-4xl font-bold text-white">Welcome back !</div>
      <form>
        <div className="flex flex-col items-center gap-4 p-12">
          <Input
            type="text"
            name="email-input"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse email"
            icon={<i className="fas fa-envelope"></i>}
            iconAlignment="left"
          />
          <Input
            type="text"
            name="password-input"
            id="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            icon={<i className="fas fa-lock"></i>}
            iconAlignment="left"
          />
          <Link className="text-white" to="/register">
            New here ? Click to create an account
          </Link>

          <button className="px-4 py-2 text-white bg-indigo-300 rounded-md hover:bg-indigo-200">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
