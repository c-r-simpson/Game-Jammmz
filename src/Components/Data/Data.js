import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);

  const auth = process.env.MOBY_KEY;
  const makeAPICall = async () => {
    try {
      const response = await fetch(
        `https://api.mobygames.com/v1/games/random?api_key=${auth}`
      );
      const result = await response.json();
      console.log("auth", auth);
      console.log("Your results, sir: ", result);
      setData(result);
    } catch (err) {
      console.log("error: ", err);
    }
  };
  useEffect(() => {
    makeAPICall();
  }, []);
}

export default Data;
