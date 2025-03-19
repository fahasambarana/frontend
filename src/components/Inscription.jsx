import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      //alert('mety')
      navigate('/')

     
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-whute rounded-lg max-x-md w-1/2 flex justify-between">
        <div className="rounded w-full h-[500px] bg-blue-100 "></div>
        <div className="w-full p-6 ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl text-center">Connexion</h2>
            <label htmlFor="">Username</label>
            <br />
            <input
              className="w-full mt-2 p-2 rounded-lg focus:outline-none text-gray-800 border border-gray-200"
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />{" "}
            <br />
            <label htmlFor="">Adresse email</label>
            <br />
            <input
              className="w-full mt-2 p-2 rounded-lg focus:outline-none text-gray-800 border border-gray-200"
              type="text"
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 ">
              Se connecter
            </button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
