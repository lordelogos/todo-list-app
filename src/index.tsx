import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//@ts-ignore
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
