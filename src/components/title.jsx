import React from "react";

const TitleApp = ({ title }) => {
  return (
    <div className="title_app">
      <h1>{title}</h1>
      <div>
        <span></span>
        <p>Cloudy Design</p>
        <span></span>
      </div>
    </div>
  );
};

export default TitleApp;
