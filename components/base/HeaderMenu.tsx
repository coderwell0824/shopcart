"use client";
import { headerMenuData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerMenuData?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="hover:text-shop_light_green hoverEffect relative group"
        >
          {item.title}
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:left-0" />
          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 hoverEffect group-hover:right-0" />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
