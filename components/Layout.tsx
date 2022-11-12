import React, { FC } from "react";
import InfoBlock from "./InfoBlock/InfoBlock";
import Sidebar from "./Sidebar/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
  return(
    <div className="wrapper">
      <Sidebar />
      {children}
      <InfoBlock />
    </div>
  );
}

export default Layout;