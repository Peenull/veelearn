import React, { useState, useContext } from "react";
import { State } from "../Navigation/Navigator";
import * as FA from "react-icons/fa";

function SideBar(props) {
  let [arts, setArts] = useState(false);
  let [socialScience, setSocialScience] = useState(false);
  let [science, setScience] = useState(false);
  let [skills, setSkills] = useState(false);

  let { side, changeLocation, setSide } = useContext(State);

  const filterLevel = (level) => {
    switch (level) {
      case "science":
        setScience(!science);
        setArts(false);
        setSocialScience(false);
        setSkills(false);
        break;
      case "arts":
        setArts(!arts);
        setScience(false);
        setSocialScience(false);
        setSkills(false);
        break;
      case "socialScience":
        setSocialScience(!socialScience);
        setScience(false);
        setArts(false);
        setSkills(false);
        break;
      case "skills":
        setSkills(!skills);
        setSocialScience(false);
        setScience(false);
        setArts(false);
    }
  };

  return (
    <div style={{ right: side && "0" }} className="side">
      <h2
        onClick={() => {
          setSide(false);
          changeLocation("home");
        }}
        className="homeSideBar beekButton"
      >
        <FA.FaHome />
        Home
      </h2>
      <div className="course">
        <div className="science ">
          <div onClick={() => filterLevel("science")} className="options">
            <FA.FaFlask />
            <h4>Science</h4>
          </div>
          {science && (
            <div className="subject">
              <a onClick={() => changeLocation("chemistry")}>Chemistry</a>
              <a onClick={() => changeLocation("biology")}>Biology</a>
              <a onClick={() => changeLocation("physics")}>Physics</a>
              <a onClick={() => changeLocation("aMaths")}>A Maths</a>
              <a onClick={() => changeLocation("css")}>CSC</a>
            </div>
          )}
        </div>
        <div className="socialScience course">
          <div onClick={() => filterLevel("socialScience")} className="options">
            {" "}
            <FA.FaLandmark />
            <h4>Social</h4>
          </div>
          {socialScience && (
            <div className="subject">
              <a onClick={() => changeLocation("maths")}>Mathematics</a>
              <a onClick={() => changeLocation("english")}>English</a>
              <a onClick={() => changeLocation("french")}>French</a>
              <a onClick={() => changeLocation("geography")}>Geography</a>
              <a onClick={() => changeLocation("economics")}>Economics</a>
              <a onClick={() => changeLocation("foodScience")}>Food Science</a>
              <a onClick={() => changeLocation("ict")}>ICT</a>
            </div>
          )}
        </div>
        <div className="arts course">
          <div onClick={() => filterLevel("arts")} className="options">
            {" "}
            <FA.FaTheaterMasks />
            <h4>Arts</h4>
          </div>
          {arts && (
            <div className="subject">
              <a onClick={() => changeLocation("history")}>History</a>
              <a onClick={() => changeLocation("literature")}>Literature</a>
              <a onClick={() => changeLocation("commence")}>Commence</a>
              <a onClick={() => changeLocation("philosophyAndLogic")}>
                Philo/Logic
              </a>
            </div>
          )}
        </div>
        <div className="skills course">
          <div onClick={() => filterLevel("skills")} className="options">
            {" "}
            <FA.FaBrain />
            <h4>Skills</h4>
          </div>
          {skills && (
            <div className="subject">
              <a onClick={() => changeLocation("programming")}>Programming</a>
              <a onClick={() => changeLocation("photography")}>Photography</a>
              <a onClick={() => changeLocation("tailoring")}>Tailoring</a>
            </div>
          )}
        </div>
      </div>
      <div>
        <button className="donateButton beekButton">Donate</button>
      </div>
      <div className="contact">
        <a title="facebook.com">
          <FA.FaFacebook color={"#03f"} size={25} />{" "}
        </a>
        <a title="x.com">
          <FA.FaTwitter color={"#0000ff9f"} size={25} />{" "}
        </a>
        <a title="youtube.com">
          <FA.FaYoutube color={"#f90011"} size={25} />{" "}
        </a>
        <a title="instagram.com">
          <FA.FaInstagram color={"#990000fa"} size={25} />{" "}
        </a>
        <a title="send massage">
          <FA.FaMailBulk color={"#0202af"} size={25} />
        </a>
      </div>
      <div className="feedback">
        <label>Feedback</label>
        <textarea title="Leave a feedBack"></textarea>
        <button className="beekButton">Submit</button>
      </div>
      <div className="legality">
        <h4>&copy; {new Date().getFullYear()} Beek LTD</h4>
        <div>
          <a className="legalStuff beekButton">Terms and Conditions</a>
          <a className="legalStuff beekButton">Privacy and Policy</a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
