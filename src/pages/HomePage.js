import React from "react";
import "../styles/HomePage.scss";
import MapContainer from "./../components/pinsmap";

const HomePage = () => {
  return (
    <div id="home-page-container">
      <div className={"home-page"}>
        <div>

        </div>
        <MapContainer />
      </div>
    </div>
  );
};

export default HomePage;
