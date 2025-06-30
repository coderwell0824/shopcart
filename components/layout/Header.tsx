import React, { use } from "react";
import PageLayout from "./PageLayout";
import Logo from "../base/Logo";
import HeaderMenu from "../base/HeaderMenu";
import SearchBar from "../base/SearchBar";
import CartIcon from "../icon/CartIcon";
import FavoriteButton from "../icon/FavoriteButton";
import Login from "../base/Login";
import MobileMenu from "../base/MobileMenu";
import { currentUser } from "@clerk/nextjs/server";

const Header = async () => {
  const user = await currentUser();
  console.log(user, "user");

  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <PageLayout className="flex justify-between items-center text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <Login />
        </div>
      </PageLayout>
    </header>
  );
};

export default Header;
