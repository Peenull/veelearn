import React, { useState } from "react";
import "./Loading.css";
function Loading(props) {
  let [i, setI] = useState([1, 2, 3, 4]);

  const key = () =>
    ((Math.random() * Math.random()) / Math.random()) * Math.random();
  return (
    <div>
      {i.map((i) => (
        <div key={key()} className="skeletonScreen loading">
          <div className="skeletonImage"></div>
          <div className="skeletonDescription">
            <div>
              <span className="skeletonSubject"></span>
              <span className="skeletonText"></span>
              <span className="skeletonText"></span>
              <span className="skeletonText"></span>
              <span className="skeletonText"></span>
            </div>
            <div className="skeletonTextDiv">
              <span className="skeletonTextDescription"></span>
              <span className="skeletonTextDescription"></span>
              <span className="skeletonTextDescription"></span>
              <span className="skeletonTextDescription"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
