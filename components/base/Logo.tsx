import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <Link href="/">
      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green cursor-pointer hoverEffect group font-sans",
          className
        )}
      >
        Shopcar
        <span className="text-shop_light_green group-hover:text-shop_dark_green hoverEffect">
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
