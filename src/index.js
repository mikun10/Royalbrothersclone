import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import HomePageLayout from "./components/HomePageLayout";

function App() {
  return <HomePageLayout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
