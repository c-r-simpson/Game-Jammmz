import React, { useState, useEffect } from "react";

function GameGrid() {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateRows: "300px 300px 300px",
    gridTemplateColumns: "525px 525px 525px",
  };

  const gridDivStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const girdImgStyle = {
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <>
      <div style={gridContainerStyle}>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
        <div style={gridDivStyle}>
          <img
            style={girdImgStyle}
            alt="willem"
            src="https://www.flickeringmyth.com/wp-content/uploads/2017/08/Florida-Project.png"
          />
        </div>
      </div>
    </>
  );
}

export default GameGrid;
