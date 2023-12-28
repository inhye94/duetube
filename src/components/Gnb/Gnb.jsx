import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Gnb() {
  return (
    <header className="dark">
      <div className="left-box">
        <h1>
          <Link to="/">Duetube</Link>
        </h1>
      </div>

      <div className="center-box">
        <SearchForm />
      </div>

      <div className="right-box">
        <div className="toggle-box">
          <button type="button">...</button>

          <ul>
            <li>
              <div>
                <label>
                  다크모드
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="visually-hidden peer"
                  />
                  <div className="toggle-wrapper w-4 h-4 peer-checked:bg-red-400">
                    <span className="toggle-switch"></span>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
