import React, { useContext } from "react";
import { State } from "./Navigator";
import "./Popup.css";
import * as FA from "react-icons/fa";
function Popup({ lesson }) {
  let { setView, location } = useContext(State);
  const key = () =>
    ((Math.random() * Math.random()) / Math.random()) * Math.random();
  return (
    <div>
      {console.log(lesson)}
      <div className="popupOverlay"></div>
      <div className="popup">
        <FA.FaTimes
          className="popupClosingIcon"
          cursor={"pointer"}
          size={30}
          color="#f55"
          onClick={() => setView(false)}
        />
        <div>
          <h3 className="subjectTitle">
            {location.charAt(0).toLocaleUpperCase() + location.slice(1)}
          </h3>
          <h1 className="topicTitle" style={{ fontSize: "30px" }}>
            {lesson.topic}
          </h1>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>{lesson.des}</p>
        </div>
        <div className="linking">
          <div className="lessonContent">
            <p className="lessonType">
              {" "}
              {lesson.type === "Video" ? (
                <FA.FaVideo color="#91055f" />
              ) : (
                <FA.FaFileAlt color="#0100f5" />
              )}
              {lesson.type}
            </p>
            <p
              className="lessonSource "
              style={{
                color:
                  lesson.src === "Youtube"
                    ? "#f90011"
                    : lesson.src === "Wikipedia" && "#50f",
              }}
            >
              <FA.FaDirections color="#0aa000" />{" "}
              {lesson.src ? lesson.src : "Unknown"}
              {/* <a href={lesson.link} target="_blank" className="beekButton">
                {lesson.link}
              </a> */}
            </p>
          </div>
          <div className="popupEnteringButtonDiv">
            <a href={lesson.link} target="_blank">
              <button className="lessonVisitButton enteringButton beekButton">
                Visit
              </button>
            </a>
            <button className="lessonViewButton enteringButton beekButton">
              function
            </button>
          </div>
        </div>
        <div>
          <div className="popupImageContainer">
            {lesson.img.map((i) => (
              <a href={i} key={key()}>
                <img className="popupImage" src={i} alt={i}></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
