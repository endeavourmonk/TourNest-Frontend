import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { store } from "./utils/store";

import Navbar from "./components/ui/custom/Navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <React.StrictMode>
        <Provider store={store}>
          <Navbar />
          <div className="pt-32">
            <Outlet />
          </div>
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
