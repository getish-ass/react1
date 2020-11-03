import React from "react";
import ReactDOM from "react-dom";

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

var dateTime = new Date().getHours();
const customStyle = {
  color: ""
};
let greeting;
if (dateTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (dateTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {" "}
    {greeting + "  " + dateTime}
  </h1>,
  document.getElementById("root")
);
