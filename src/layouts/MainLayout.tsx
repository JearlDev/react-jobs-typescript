import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/common/Navbar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}
