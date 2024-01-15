"use client"

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";

import Logo from "./_components/logo";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const NavBarPage = () => {
    const scrolled=useScrollTop()


    return ( 
        <div className={cn(
            "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-md"
        )}>
            <Logo/>
            <div className="md:ml-auto md:hidden md:justify-end justify-between w-full flex items-center gap-x-2 ">
                <Avatar>
                    <AvatarFallback className="bg-black text-white text-xs text-muted">DPS</AvatarFallback>
                </Avatar>     
            </div>
        </div>
     );
}
 
export default NavBarPage;