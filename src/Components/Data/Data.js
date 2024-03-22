import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);

  const url = `https://api.mobygames.com/v1/games/random?api_key=moby_NjjcBgWV6rMBIde6TOXn2AUpSKw`;
  //${process.env.MOBY_KEY}
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log("error: ", err));
  });

  console.log("data: ", data);
}

export default Data;
