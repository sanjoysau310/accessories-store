import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main id="main" className="main-page">
        <Outlet />
      </main>
    </>
  );
};
