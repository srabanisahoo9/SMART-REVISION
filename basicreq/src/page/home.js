import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    console.log(path);
    navigate(path);
  };
  return (
    <>
      <h1>this is home page</h1>
      <button onClick={() => handleClick("/login")}>login</button>
      <button onClick={() => handleClick("/register")}>register</button>
    </>
  );
};

export default Home;
