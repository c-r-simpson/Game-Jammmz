import React, { useState, useEffect } from "react";

function GameGrid() {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 600px)",
    border: "5px solid red",
    justifyContent: "center",
  };

  const girdImgStyle = {
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <>
      <div className="gridContainer" style={gridContainerStyle}>
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
        />
      </div>
    </>
  );
}

export default GameGrid;
