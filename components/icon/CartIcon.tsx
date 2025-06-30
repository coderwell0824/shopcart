import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="group relative">
      <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect cursor-pointer" />
      <span className=" absolute -top-1 -right-1 bg-shop_dark_green text-white text-xs h-3.5 w-3.5 font-semibold flex items-center justify-center rounded-full">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
