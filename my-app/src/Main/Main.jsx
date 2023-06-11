import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import "./main.css";

const Main = () => {
  return (
    <div className="main">
    <div className="name">
      <div className="main2">
        <h1 style={{ color: "white", marginBottom: "20px" }}>Unsplash</h1>
        <h6 style={{ color: "white", marginBottom: "20px" }}>
          The internet’s source for visuals. <br /> <br />
          Powered by creators everywhere.
        </h6>
        <div className="put2">
          <Search2Icon className="search2" />
          <input
            className="put"
            placeholder="Search high-resolution images"
            type="text"
          />
        </div>
        <h6 style={{ color: "white" }}>
          Trending: flower, wallpapers, backgrounds, happy, love
        </h6>
      </div>
    </div>
      <div className="read">
        <p>Photo by Marek Piwnicki</p>
        <p>Read more about the Unsplash License</p>
        <p>Start selling online</p>
      </div>
    </div>
  );
};

export default Main;
