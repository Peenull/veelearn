import React, { useContext } from "react";
import { State } from "../Navigation/Navigator";
import "./ScreenDirector.css";
import HomeScreen from "./HomeScreen";
import MainScreenRenderer from "../Navigation/MainScreenRenderer";

function ScreenDirector(props) {
  let { location } = useContext(State);
  return (
    <div>
      {location === "home" ? (
        <HomeScreen />
      ) : (
        <MainScreenRenderer location={location} />
      )}
    </div>
  );
}

export default ScreenDirector;
