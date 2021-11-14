import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import dotenv from "dotenv";
dotenv.config({ path: "../example.env" });

ReactDOM.render(<Routes />, document.getElementById("root"));
serviceWorker.register();