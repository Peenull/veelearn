import React, { useContext } from "react";
import "./Frame.css";
import * as FA from "react-icons/fa";
import { State } from "../Navigation/Navigator";
function Header(props) {
  const { side, setSide, search, setSearch } = useContext(State);

  return (
    <div className="header">
      <div className="topName">
        <FA.FaBook color="#33f" size={17} />
        <h2 className="name">Beek</h2>
      </div>
      <div className="searchBar">
        <input
          value={search}
          onChange={(e) =>
            setSearch(() => {
              let temp = e.target.value;
              return temp;
            })
          }
          type="search"
          className="searchInput"
          placeholder="Search..."
        />
        <FA.FaSearch className="searchIcon" />
      </div>
      <div onClick={() => setSide(!side)} className="menu">
        <span className="menuBars" />
        <span className="menuBars" />
        <span className="menuBars" />
      </div>
    </div>
  );
}

export default Header;
