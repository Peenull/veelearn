import { useEffect, useState } from "react";
import Navigator from "./Navigation/Navigator";
import * as FA from "react-icons/fa";
import "./App.css";

function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 500 ? (
        <div className="smallScreen">
          <Navigator />
        </div>
      ) : (
        <div className="largeScreen">
          <FA.FaExclamationCircle color="#f00" size={40} />

          <h1 style={{ color: "#f90202" }}>
            <FA.FaExclamationTriangle size={20} /> Screen Error{" "}
            <FA.FaExclamationTriangle size={20} />
          </h1>
          <div>
            <h3>{"-> "}Please use a Mobile Phone to access this Page</h3>
            <h3>{"-> "}If desktop Resize your Screen to access the page</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
