import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <React.StrictMode>
        <Outlet />
      </React.StrictMode>
    </>
  );
}

export default App;
