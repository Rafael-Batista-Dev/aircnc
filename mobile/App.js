import React from "react";
import { YellowBox } from "react-native";
import Routes from "./src/routes";

console.disableYellowBox = true;
YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return <Routes />;
}
