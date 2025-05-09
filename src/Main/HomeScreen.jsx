import React, { useEffect, useState } from "react";
import MiniRenderer from "./MiniRenderer";
import "./HomeScreen.css";
function HomeScreen(props) {
  let [data, setData] = useState();

  useEffect(() => {
    fetch("Data/home.json")
      .then((res) => res.json())
      .then((data) => {
        setData(() => data);
      });
  }, []);

  const key = () =>
    ((Math.random() * Math.random()) / Math.random()) * Math.random();
  return (
    <>
      {data && (
        <div>
          {data.bottom.map((subject) => (
            <MiniRenderer key={key()} subject={subject} />
          ))}
        </div>
      )}
    </>
  );
}

export default HomeScreen;
