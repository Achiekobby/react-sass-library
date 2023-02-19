import React from "react";

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
      <div className="container">
        <h3 className="font-xl text-default">Background Colors</h3>
      </div>
      <hr className="mt-1 mb-1" />
      <div className="container">
        <h4 className="font-lg text-default">Primary Color Accent</h4>
        <div className="row">
          <span class=" p-3 bg-primary-dark-8 text-white">primary dark 8</span>
          <span class="p-3 bg-primary-dark-6 text-white">primary dark 6</span>
          <span class="p-3 bg-primary-dark-4 text-white">primary dark 4</span>
          <span class="p-3 bg-primary-dark-2 text-white">primary dark 2</span>
          <span class="p-3 bg-primary text-white">primary</span>
          <span class="p-3 bg-primary-light-2 text-white">primary light 2</span>
          <span class="p-3 bg-primary-light-4 text-white">primary light 4</span>
          <span class="p-3 bg-primary-light-6 text-white">primary light 6</span>
          <span class="p-3 bg-primary-light-8 text-white">primary light 8</span>
        </div>
      </div>
      <div className="container">
        <h4 className="font-lg text-default">Secondary Color Accent</h4>
        <div className="row">
          <span class=" p-3 bg-secondary-dark-8 text-white">secondary dark 8</span>
          <span class="p-3 bg-secondary-dark-6 text-white">secondary dark 6</span>
          <span class="p-3 bg-secondary-dark-4 text-white">secondary dark 4</span>
          <span class="p-3 bg-secondary-dark-2 text-white">secondary dark 2</span>
          <span class="p-3 bg-secondary text-white">secondary</span>
          <span class="p-3 bg-secondary-light-2 text-white">secondary light 2</span>
          <span class="p-3 bg-secondary-light-4 text-white">secondary light 4</span>
          <span class="p-3 bg-secondary-light-6 text-white">secondary light 6</span>
          <span class="p-3 bg-secondary-light-8 text-white">secondary light 8</span>
        </div>
      </div>
      <div className="container">
        <h4 className="font-lg text-default">Info Color Accent</h4>
        <div className="row">
          <span class=" p-3 bg-info-dark-8 text-white">info dark 8</span>
          <span class="p-3 bg-info-dark-6 text-white">info dark 6</span>
          <span class="p-3 bg-info-dark-4 text-white">info dark 4</span>
          <span class="p-3 bg-info-dark-2 text-white">info dark 2</span>
          <span class="p-3 bg-info text-white">info</span>
          <span class="p-3 bg-info-light-2 text-white">info light 2</span>
          <span class="p-3 bg-info-light-4 text-white">info light 4</span>
          <span class="p-3 bg-info-light-6 text-white">info light 6</span>
          <span class="p-3 bg-info-light-8 text-white">info light 8</span>
        </div>
      </div>
      <div className="container">
        <h4 className="font-lg text-default">Default Color Accent</h4>
        <div className="row">
          <span class=" p-3 bg-default-dark-8 text-white">default dark 8</span>
          <span class="p-3 bg-default-dark-6 text-white">default dark 6</span>
          <span class="p-3 bg-default-dark-4 text-white">default dark 4</span>
          <span class="p-3 bg-default-dark-2 text-white">default dark 2</span>
          <span class="p-3 bg-default text-white">default</span>
          <span class="p-3 bg-default-light-2 text-white">default light 2</span>
          <span class="p-3 bg-default-light-4 text-white">default light 4</span>
          <span class="p-3 bg-default-light-6 text-white">default light 6</span>
          <span class="p-3 bg-default-light-8 text-white">default light 8</span>
        </div>
      </div>
    </>
  );
};

export default Library;
