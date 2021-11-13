import React from "react";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import Main from "./Main";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-px xl:-mx-px">
        <SideNav />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
