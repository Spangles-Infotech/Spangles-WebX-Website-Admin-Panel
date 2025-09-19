// Layout.js
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />   {/* This is where the child route content will render */}
      {/* <Footer /> */}
    </>
  );
}
