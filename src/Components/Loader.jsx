
import React from "react";
import Lottie from "lottie-react";
import pokeballAnimation from "../data/pokeball-loading.json";

const Loader = () => {
  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 200,
      height: 200,
      zIndex: 999,
    }}>
      <Lottie animationData={pokeballAnimation} loop={true} />
    </div>
  );
};

export default Loader;

