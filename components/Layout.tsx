import React, { FC } from "react";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
  return(
    <>
      {children}
    </>
  );
}

export default Layout;