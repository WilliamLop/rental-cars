"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { UserButton } from "@clerk/nextjs";


export default function NavbarDashboard() {
    return (
        <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex items-center justify-end rounded-full gap-x-2 shadow-md w-fit">
                <UserButton />
            </div>

        </nav>
    )
}
