import React, { createContext, useState } from "react";
import "./Navigator.css";
import ScreenDirector from "../Main/ScreenDirector";
import Header from "../Main/Header";
import SideBar from "../Main/SideBar";

export const State = createContext();
function Navigator() {
  let [side, setSide] = useState(false);
  let [search, setSearch] = useState("");
  let [location, setLocation] = useState("home");

  const changeLocation = (subject) => {
    setLocation(() => {
      let newLocation = subject;
      return newLocation;
    });
  };

  return (
    <div className="navigator">
      <State.Provider
        value={{
          side,
          setSide,
          changeLocation,
          location,
          search,
          setSearch,
        }}
      >
        <Header />
        <SideBar />
        <ScreenDirector />
      </State.Provider>
    </div>
  );
}

export default Navigator;
