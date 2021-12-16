import React from "react";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import { Header } from "./components/Header";
import { Downloader } from "./downloader/Downloader";
import {DownloadList} from "./downloader/DownloadList"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Downloader />
        <DownloadList/>
      </div>
    </BrowserRouter>
  );
}

export default App;
