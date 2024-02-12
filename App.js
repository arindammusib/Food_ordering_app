import React from "react";
import ReactDom  from "react-dom";
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},'This is  a heading')
    ]),
]);
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(parent);