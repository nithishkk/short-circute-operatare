import React from "react";
import "./style.css";

export default function App() {
  const isLoggedIn= true;
  return (
    <div>
      <h1>Hello StackBlitz!</h1> {!isLoggedIn && <p>Start editing to see some magic happen :)</p> }
     
    </div>
  );
}
// okati conditon true ayathe ne okate dispale cheyali ankonte ah time lo  && use chesthamu