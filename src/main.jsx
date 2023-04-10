import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>

          <Route path="*" element={<h1>404. Page not Found</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
