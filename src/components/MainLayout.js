import React from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
