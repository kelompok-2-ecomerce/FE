import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-auto bg-white">
        <div className="w-full min-h-screen ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
