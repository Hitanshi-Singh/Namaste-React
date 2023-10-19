/*ReactElement(object)=>HTML(browser understands)*/
import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
  <h2 className="head" tabIndex={5}>
    Welcome to Namaste React🚀
  </h2>
);
const Headingcomponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">hello from the functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);
