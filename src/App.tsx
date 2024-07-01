import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Appbar from "./components/ui/custom/Appbar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <React.StrictMode>
        <Appbar />
        <Outlet />
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
