import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Start from "./components/Start/Start";
import AuthForm from "./components/AuthForm";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import "./App.css";
import EditProfile from "./components/EditProfile/EditProfile";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import MyOrders from "./components/MyOrders/MyOrders";
import MyAnnouncement from "./components/MyAnnouncement/MyAnnouncement";
import Messages from "./components/Messages/Messages";
import Chat from "./components/Chat/Chat";
import NewAd from "./components/NewAd/NewAd";
import CardForClient from "./components/Cards/CardForClient";
import CardForUser from "./components/Cards/CardForUser/CardForUser";
import Feedbacks from "./components/Feedback/Feedbacks";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "./store/slice/profileSlice";
import AboutUs from "./components/AboutUs";
import Help from "./components/Help";
import { AdsProvider } from "./store/AdsContext";
import Advertising from "./components/Advertising/Advertising";
import { fetchAllUsers } from "./store/slice/usersSlice";
import { useAuthListener } from "./hooks/useAuthListener";
import LocationMobile from "./components/LocationMobile";

function App() {
  useAuthListener();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUser?.uid) {
      dispatch(fetchUserProfile(currentUser.uid));
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("Logged in user:", user);
      } else {
        setCurrentUser(null);
        console.log("No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  const location = useLocation();
  const hideHeader = location.pathname === "/" ;
  const isChatPage = location.pathname.startsWith("/profile/messages");
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="bg-[#F6F6FA] lg:bg-white">
      {!hideHeader && !(isChatPage && isMobile) && <Header />}

      <AdsProvider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="/profile" element={<Profile user={currentUser} />} >
            <Route
              index
              element={
                <>
                  <MyOrders />
                  <MyAnnouncement />
                </>
              }
            />
            <Route path="notifications" element={<Messages />} />
            <Route path="/profile/messages/:id" element={<Chat />} />
          </Route>

          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/profile/announcement" element={<MyAnnouncement />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/new-add" element={<NewAd />} />
          <Route path="/card-for-client/:id" element={<CardForClient />} />
          <Route path="/card-for-user/:id" element={<CardForUser />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/location" element={<LocationMobile />} />
        </Routes>
      </AdsProvider>
      <Footer />
    </div>
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