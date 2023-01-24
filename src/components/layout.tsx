import React, { FC } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen ">{children}</div>
    </>
  );
};

export default Layout;
