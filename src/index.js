import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Context from "./components/context";
ReactDOM.render(
    <Context>
<App />
</Context>
, document.getElementById("root"));