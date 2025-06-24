import { cn } from '@/lib/utils';
import React, { FC, ReactNode } from 'react'

interface IPageLayoutProps{
    className?:string;
    children:ReactNode
}

const PageLayout:FC<IPageLayoutProps> = ({className,children}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4",className)}>{children}</div>
  )
}

export default PageLayout;