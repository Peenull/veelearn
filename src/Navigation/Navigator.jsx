import React, { createContext, useEffect, useMemo, useState } from "react";
import "./Navigator.css";
import ScreenDirector from "../Main/ScreenDirector";
import Header from "../Main/Header";
import SideBar from "../Main/SideBar";
import Popup from "./Popup";

export const State = createContext();
function Navigator() {
  let [side, setSide] = useState(false);
  let [search, setSearch] = useState("");
  let [location, setLocation] = useState("home");
  let [view, setView] = useState(false);

  let [contentToPopup, setContentToPopUp] = useState({
    topic: "No topic",
    des: "i said no topic",
    type: "Video",
    src: "Youtube",
    link: "https://www.youtube.come",
    img: ["./Media/Geography/Galaxy.png", "./Media/Geography/Moon.png"],
  });

  const changeLocation = (subject) => {
    setLocation(() => {
      let newLocation = subject;
      localStorage.setItem("veeScreenLocation", newLocation);
      return newLocation;
    });
  };
  const handleView = (lesson) => {
    setContentToPopUp(lesson);
    setView(true);
  };

  useEffect(() => {
    let passLocation = localStorage.getItem("veeScreenLocation");
    if (passLocation) {
      changeLocation(passLocation);
    } else {
      localStorage.setItem("veeScreenLocation", "home");
      changeLocation("home");
    }
  }, []);

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
          handleView,
          setView,
        }}
      >
        <Header />
        <SideBar />
        {view ? <Popup lesson={contentToPopup} /> : <ScreenDirector />}
        {/* <div style={{ display: !view && "none" }}>
          <Popup lesson={contentToPopup} />{" "}
        </div>{" "}
        <div
          style={{
            display: view && "none",
          }}
        >
          <ScreenDirector />
        </div> */}
      </State.Provider>
    </div>
  );
}

export default Navigator;
