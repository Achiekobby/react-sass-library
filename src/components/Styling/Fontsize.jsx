import React from "react";

const Fontsize = () => {
  return (
    <>
      <div className="container">
        <h3 className="font-xl text-default">Font Sizes</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="font-sm text-default">Small Fonts Size</div>
        </div>
        <div className="row">
          <div className="font-md text-default">Medium Fonts Size</div>
        </div>
        <div className="row">
          <div className="font-lg text-default">Large Fonts Size</div>
        </div>
        <div className="row">
          <div className="font-xl text-default">Extra Large Fonts Size</div>
        </div>
        <div className="row">
          <div className="font-xxl text-default">
            Extra Extra Large Fonts Size
          </div>
        </div>
      </div>
      <hr className="mt-1 mb-1" />
    </>
  );
};

export default Fontsize;
