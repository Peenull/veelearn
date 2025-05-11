import React, { useEffect, useContext, useState } from "react";
import { State } from "../Navigation/Navigator";
import "./HomeScreen.css";
import * as FA from "react-icons/fa";

function MiniRenderer({ subject }) {
  let { changeLocation, handleView } = useContext(State);

  const key = () =>
    ((Math.random() * Math.random()) / Math.random()) * Math.random();

  return (
    <>
      <div className="miniRender">
        <div className="moreDiv">
          <div
            className="moreDirector beekButton"
            onClick={() => changeLocation(subject.subject)}
          >
            <h3>
              {subject.subject.charAt(0).toUpperCase() +
                subject.subject.slice(1)}
              ....
            </h3>{" "}
            <FA.FaArrowAltCircleRight size={20} color="#00bbcc" />
          </div>
        </div>

        <div className="rendering">
          {subject.lessons.map((lesson) => (
            <div className="miniRendererTopic" key={key()}>
              <div className="miniRendererImageContainer">
                {lesson.img.map((i) => (
                  <img
                    className="miniRendererImage"
                    key={key()}
                    src={i}
                    alt={i}
                  ></img>
                ))}
              </div>
              <div className="miniRendererLessonDescription">
                <div className="miniRendererFormalDescription">
                  <h4 className="miniTopicTitle">{lesson.topic}</h4>
                  <div>
                    <code className="lessonType">
                      {" "}
                      {lesson.type === "Video" ? (
                        <FA.FaVideo color="#91055f" />
                      ) : (
                        <FA.FaFileAlt color="#0100f5" />
                      )}
                      {lesson.type}
                    </code>
                    <p
                      className="lessonSource"
                      style={{
                        color:
                          lesson.src === "Youtube"
                            ? "#f90011"
                            : lesson.src === "Wikipedia" && "#50f",
                      }}
                    >
                      <FA.FaDirections color="#0aa000" />{" "}
                      {lesson.src ? lesson.src : "Unknown"}
                    </p>
                  </div>
                  <div className="miniRendererLessonEnteringContainer">
                    <a
                      style={{ width: "fitContent" }}
                      href={lesson.link}
                      target="_blank"
                    >
                      <button className="miniRendererLessonVisitButton miniRendererEnteringButton beekButton">
                        Visit
                      </button>
                    </a>
                    <button
                      onClick={() => handleView(lesson)}
                      className="miniRendererLessonViewButton miniRendererEnteringButton beekButton"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MiniRenderer;
