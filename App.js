/*ReactElement(object)=>HTML(browser understands)*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am a nested structure"),
    React.createElement("h2", { id: "heading2" }, "I am a sibling"),
  ])
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);