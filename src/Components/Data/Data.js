import React, { useEffect, useState } from "react";
import GameGrid from "../GameData/GameGrid";

function Data() {
  const [coverImages, setCoverImages] = useState([]);

  const randomArray = [];
  const coverURLs = [];

  for (let i = 0; i < 30; i++) {
    randomArray.push(Math.ceil(Math.random() * 132992));
  }
  const randomIDs = randomArray
    .map((num) => `${num}`)
    .join("&id=")
    .replace(/,/g, "");

  console.log(`Your random numbers are ${randomArray}`);
  console.log("randomIDs =", randomIDs);

  const url = `https://api.mobygames.com/v1/games?id=`;
  const auth = "&api_key=moby_NjjcBgWV6rMBIde6TOXn2AUpSKw";
  const requestURL = `${url}${randomIDs}${auth}`;

  console.log("Complete requestURL: ", requestURL);

  const makeAPICall = async () => {
    try {
      const response = await fetch(requestURL);
      const gameObject = await response.json();
      console.log("Your object, sir: ", gameObject);

      for (let i = 0; i < gameObject.games.length; i++) {
        if (gameObject.games[i]?.sample_cover?.image)
          coverURLs.push(gameObject.games[i].sample_cover.image);
      }
      console.log("this should be an array of urls: ", coverURLs);
      setCoverImages(coverURLs);
    } catch (err) {
      console.log("error: ", err);
    }
  };
  useEffect(() => {
    makeAPICall();
    console.log("coverImages state prop: ", coverImages);
  }, []);

  return <GameGrid coverImage={coverImages} />;
}

export default Data;
