//import {Route ,  Routes} from 'react-router-dom'
import React from "react";
import { useSelector } from "react-redux";
import Home from "./pages/home";
import "./App.css";
import Profile from "./pages/profile";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";

function App() {
  const user = useSelector((state) => state.AuthReducer.authData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />

        <Route path="/chat" element= {user? <Chat/>: <Navigate to = "../auth"/>}/>
      </Routes>
    </div>
  );
}

export default App;
