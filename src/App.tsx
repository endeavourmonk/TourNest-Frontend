import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Appbar from "./components/ui/custom/Appbar";
import { ThemeProvider } from "@/components/theme-provider";
import ReviewCard from "./components/ui/custom/ReviewCard";

const reviewData = {
  _id: "65e47343d6e3ba007493bcd8",
  review:
    "zabardast, gaazb ka tour hai bhai, highly recommended, jaroor ghumne jao bhai log a tour hai bhai, highly recommended, jaroor ghumne jao bhaz",
  rating: 4.5,
  tour: "65e459fc7657f96718232ed9",
  user: {
    _id: "65d36e9589c6bd84b385c331",
    name: "Ujjawal",
    username: "admin",
    photo: "https://avatars.githubusercontent.com/u/79056054?v=4",
  },
  createdAt: "2024-03-03T12:55:00.667Z",
  isEdited: false,
  updatedAt: "2024-03-03T12:55:00.667Z",
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <React.StrictMode>
        <Appbar />
        <div className="pt-32">
          <Outlet />
        </div>
        <ReviewCard reviewData={reviewData} />
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
