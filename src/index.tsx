// IMPORT REACT LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/home/Home";
import Players from "./pages/players/Players";
import Player from "./pages/player/Player";
import NotFound from "./pages/not_found/NotFound";
// IMPORT COMPONENTS
import Header from "./components/header/Header";
// IMPORT STYLES
import "./Index.css";
import Register from "./pages/register/Register";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="players" element={<Players player_status="all" />} />
            <Route
               path="players/preseleccionados"
               element={<Players player_status="preselected" />}
            />
            <Route
               path="players/preeliminados"
               element={<Players player_status="predeleted" />}
            />
            <Route path="player/:id" element={<Player />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
