import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

const App = () => {
  return (
    <div className="flex flex-col w-full background max-h-max  items-center pb-4 min-h[100vh]">
      <h1 className="w-11/12 text-center bg-white mt-7 py-3 rounded-lg text-5xl">Random GIFS</h1>
      <div className="w-full flex flex-col items-center mt-8 gap-y-8" >
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
};

export default App;
