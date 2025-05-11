import React, { useEffect, useState, useContext, useMemo } from "react";
import "./MainScreenRenderer.css";
import { State } from "./Navigator";
import Loading from "./Loading";
import * as FA from "react-icons/fa";

function MainScreenRenderer({ location }) {
  let [data, setData] = useState([]);
  let [loaded, setLoaded] = useState(false);

  let { search, handleView } = useContext(State);

  useEffect(() => {
    setLoaded(false);
    fetch(`Data/${location}.json`)
      .then((res) => res.json())
      .then((file) =>
        setData(() => {
          setLoaded(true);
          file = file.sort(() => Math.random() - 0.5);
          return file;
        })
      )
      .catch((e) => console.log(e));
  }, [location]);

  const renderer = useMemo(() => {
    return data.filter((lesson) => lesson.topic.toLowerCase().includes(search));
  }, [search, loaded]);

  const key = () =>
    ((Math.random() * Math.random()) / Math.random()) * Math.random();
  return (
    <div className="mainScreenRenderer">
      {loaded ? (
        renderer.map((lesson) => (
          <div key={key()} className="topic">
            <div className="topicImageContainer">
              {lesson.img.map((i) => (
                <a href={i} key={key()}>
                  <img className="topicImage" src={i} alt={i}></img>
                </a>
              ))}
            </div>
            <div className="lessonDescriptionContainer">
              <div className="lessonFormalDescriptionContainer">
                <div className="lessonFormalDescriptionTitles">
                  {" "}
                  <h3 className="subjectTitle">
                    {location.charAt(0).toLocaleUpperCase() + location.slice(1)}
                  </h3>
                  <h4 className="topicTitle">{lesson.topic}</h4>
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
                </div>
                <div className="lessonEnteringContainer">
                  <a
                    style={{ width: "fitContent" }}
                    href={lesson.link}
                    target="_blank"
                  >
                    <button className="lessonVisitButton enteringButton beekButton">
                      Visit
                    </button>
                  </a>
                  <button
                    onClick={() => handleView(lesson)}
                    className="lessonViewButton enteringButton beekButton"
                  >
                    View
                  </button>
                </div>
              </div>
              <div className="lessonInformalDescription">
                <p>
                  {lesson.des.length > 118
                    ? lesson.des.substring(0, 70) + "..."
                    : lesson.des}
                  {lesson.des.length > 70 && (
                    <code
                      style={{
                        color: "gray",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                    >
                      more
                    </code>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default MainScreenRenderer;
