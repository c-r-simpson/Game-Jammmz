import React, { useState, useEffect } from "react";

function GameGrid(coverImages) {
  console.log("GameGrid coverImages: ", coverImages.coverImage);
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
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
          src={`${coverImages.coverImage[0]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[1]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[2]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[3]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[4]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[5]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[6]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[7]}`}
        />
        <img
          style={girdImgStyle}
          alt="willem"
          src={`${coverImages.coverImage[8]}`}
        />
      </div>
    </>
  );
}

export default GameGrid;
