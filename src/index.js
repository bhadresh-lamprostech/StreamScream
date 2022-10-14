import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/fonts/Mars/Mars Bold.ttf";
import "./styles/fonts/reno-mono/RenoMono/Web-PS/RenoMono.woff2";
import { Web3Provider } from '@ethersproject/providers'
// import { Web3ReactProvider } from '@web3-react/core'

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  // </Web3ReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
