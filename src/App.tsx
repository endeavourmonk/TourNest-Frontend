import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Appbar from "./components/ui/Appbar";

function App() {
  return (
    <>
      <React.StrictMode>
        <Appbar />
        <Outlet />
      </React.StrictMode>
    </>
  );
}

export default App;
