import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RouteMismatch from "./RouteMismatch";
import { DataContext } from "./Context/DataContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>
);
