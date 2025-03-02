// import React from "react";

// function LandingPage() {
//   return (
//     <div clasName="h-screen flex items-center">
//       <div className="w-1/2 px-10">
//         <h1>
//           <b className="text-8xl text-gray-500">THE</b>{" "}
//           <b className="text-[#007acc] text-8xl">NEWSHUB</b>
//         </h1>
//         <p className="text-lg">
//           Stay in the loop with the latest stories, trending topics, and
//           everything that matters—all in one place. NewsHub brings the world to
//           your fingertips with a personalized newsfeed that’s as unique as you
//           are. Fast, fun, and always fresh—your news, your way.
//         </p>
//         <div className="space-x-5">
//           <button className="bg-gray-300 px-10 py-3">SIGN IN</button>
//           <button className="bg-[#007acc] px-10 py-3 text-white">
//             SIGN UP
//           </button>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <dotlottie-player
//           src="https://lottie.host/d731249c-a86e-4a60-9cdb-462aa650d603/iZwBVu4PBT.lottie"
//           background="transparent"
//           speed="1"
//           loop
//           autoplay
//         ></dotlottie-player>
//       </div>
//     </div>
//   );
// }
// export default LandingPage;
import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async () => {
    setLoading(true);
    try {
      const payload = {
        email,
        password,
      };
      const result = await axios.post(
        "http://localhost:5000/api/users/login",
        payload
      );
      toast("Login Successfull");
      localStorage.setItem("ThenewsHub-users", JSON.stringify(result.data));
      navigate("/home");
      setLoading(false);
    } catch (error) {
      toast("Something went wrong");
      setLoading(false);
    }
  };
  const register = async () => {
    setLoading(true);
    try {
      const payload = {
        email,
        password,
        name,
      };
      await axios.post("http://localhost:5000/api/users/register", payload);
      toast("Registration Successfull, Please Login");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
      setShowRegisterForm(false);
      setShowLoginForm(true);
    } catch (error) {
      toast("Something went wrong");
      setLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("ThenewsHub-users")) navigate("/home");
  }, []);
  return (
    <div className="h-screen flex items-center sm:flex-col">
      {loading && <Spinner />}
      <div className="w-1/2 px-10 flex flex-col justify-center space-y-5">
        <h1>
          <b className="text-8xl text-gray-500">THE</b>{" "}
          <b className="text-[#007acc] text-8xl">NEWSHUB</b>
        </h1>
        <p className="text-lg mt-4 justify">
          Stay in the loop with the latest stories, trending topics, and
          everything that matters—all in one place. NewsHub brings the world to
          your fingertips with a personalized newsfeed that’s as unique as you
          are. Fast, fun, and always fresh—your news, your way.
        </p>
        <div className="space-x-5 mt-6">
          <button
            className="bg-gray-500 px-10 py-3 text-white"
            onClick={() => {
              setShowRegisterForm(false);
              setShowLoginForm(true);
            }}
          >
            LOGIN
          </button>
          <button
            className="bg-[#007acc] px-10 py-3 text-white"
            onClick={() => {
              setShowLoginForm(false);
              setShowRegisterForm(true);
            }}
          >
            REGISTER
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        {!showLoginForm && !showRegisterForm && (
          <iframe
            src="https://lottie.host/embed/06b84fee-3b1c-44b1-bb85-7d5b6a4e9a17/xGAOTc2SWU.lottie"
            width="600"
            height="600"
            frameborder="0"
            allowfullscreen
          ></iframe>
        )}
        {showLoginForm && (
          <div className="ml-auto w-[600px]">
            <div className="flex flex-col bg-[#6495ed] h-screen justify-center items-end px-20 space-y-5">
              <h1 className="text-6xl text-gray-600 text-left w-full font-semibold">
                LOGIN
              </h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-600 px-5 bg-transparent placeholder-gray-200"
                placeholder="email"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="border-2 h-10 w-full border-gray-600 px-5 bg-transparent placeholder-gray-200"
                placeholder="password"
              />
              <div className="flex justify-end w-full">
                <button
                  className="bg-gray-600 px-10 py-3 text-white"
                  onClick={login}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        )}
        {showRegisterForm && (
          <div className="ml-auto w-[600px]">
            <div className="flex flex-col bg-[#6495ed] h-screen justify-center items-end px-20 space-y-5">
              <h1 className="text-6xl text-gray-600 text-left w-full font-semibold">
                REGISTER
              </h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-600 px-5 bg-transparent placeholder-gray-200"
                placeholder="name"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="border-2 h-10 w-full border-gray-600 px-5 bg-transparent placeholder-gray-200"
                placeholder="email"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="border-2 h-10 w-full border-gray-600 px-5 bg-transparent placeholder-gray-200"
                placeholder="password"
              />
              <div className="flex justify-end w-full">
                <button
                  className="bg-gray-600 px-10 py-3 text-white"
                  onClick={register}
                >
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {(showLoginForm || showRegisterForm) && (
        <AiOutlineClose
          className="absolute top-5 right-5 z-10 cursor-pointer hover:bg-gray-100 hover:rounded-full hover:p-2 hover:text-white"
          size={30}
          color="gray"
          onClick={() => {
            setShowLoginForm(false);
            setShowRegisterForm(false);
          }}
        />
      )}
    </div>
  );
}

export default LandingPage;
