//1. import react and the reactDOM from what we have installed in the root folder
import React from "react";
import ReactDOM from "react-dom/client"
//4. import App.js once it has content
import App from "./App";

//2. create a container for the root div that was created in index.html
const root = ReactDOM.createRoot(document.getElementById('root'))
//3. create the App.js file

//5. render the App.js file to the root we have created in index.html
root.render(<App />)