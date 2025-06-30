import React, { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { socialLink } from "@/constants/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ISocialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia: FC<ISocialMediaProps> = ({
  className,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn("flex gap-3.5 items-center", className)}>
        {socialLink.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold border border-shop_light_green",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
