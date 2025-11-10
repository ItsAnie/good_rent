import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Start from "./components/Start/Start";
import AuthForm from "./components/AuthForm/AuthForm";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Popular from "./components/Popular/Popular";
import Footer from "./components/Footer/Footer";
import { addOptionsToDB } from "./data"; 
import "./App.css";

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/";

  useEffect(() => {
    addOptionsToDB();
  }, []);

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/popular/:id" element={<Popular />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
