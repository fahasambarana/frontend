import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })
      .then(res =>{
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard")
      }
        
        );
      
    } catch (error) {
      console.error(error)
      setError("Misy diso")
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-whute rounded-lg max-x-md w-1/2 flex justify-between">
        <div className="rounded w-full h-[500px] bg-blue-100 "></div>
        <div className="w-full p-6 ">
          <form onSubmit={handleLogin}>
            <h2 className="text-4xl text-center">Connexion</h2>
            <label htmlFor="">Adresse email</label>
            <br />
            <input
              className="w-full mt-2 p-2 rounded-lg focus:outline-none text-gray-800 border border-gray-200"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
            <br />
            <label htmlFor="">Mot de passe</label>
            <br />
            <input
              className="w-full mt-2 p-2 rounded-lg focus:outline-none text-gray-800 border border-gray-200"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />{" "}
            <br />
            <br />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-3 py-2 rounded text-white "
            >
              Se connecter
            </button>
            <p className="text-red-700">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
