import React from "react";
import "./Profile.css";
import { useHttp } from "../../hooks/http.hook.js";

export default function Profile() {


    return (
        <>
          <div>
            <ul className="menu-main">
              <div className="backov"><li><a href="/" className="current">Work</a></li></div>
              <div className="backov"><li><a href="/">About</a></li></div>
              <div className="backov"><li><a href="/">Blog</a></li></div>
              <div className="backov"><li><a href="/">Contact</a></li></div>
            </ul>
          </div>
        </>
      );
}