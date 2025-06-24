import React from "react";
import PageLayout from "./PageLayout";
import Logo from "../base/Logo";
import HeaderMenu from "../base/HeaderMenu";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <PageLayout className="flex justify-between items-center border-b border-b-black/20">
        <Logo />
        <HeaderMenu />
        <div>Other</div>
      </PageLayout>
    </header>
  );
};

export default Header;
