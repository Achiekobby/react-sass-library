import React from "react";
import Color from "./Styling/Color";
import Fontsize from "./Styling/Fontsize";
import Grid from "./Styling/Grid";

const Library = () => {
  return (
    <>
      <div className="container">
        <h2 className="font-xl">Text Colors</h2>
        <div className="row">
          <span class="text-primary font-xl">Primary Text</span>
          <span class="text-secondary font-xl ml-1">secondary Text</span>
          <span class="text-info font-xl ml-1">info Text</span>
          <span class="text-default font-xl ml-1">default Text</span>
        </div>
      </div>

        <hr className="mt-2 mb-2" />
        <Color/>
        <hr className="mt-2 mb-2" />


       <Fontsize/>

        <Grid/>
    </>
  );
};

export default Library;
