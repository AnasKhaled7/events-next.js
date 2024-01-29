"use client";

import { Menu } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import { headerLinks } from "@/constants";
import Logo from "./Logo";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="align-middle">
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white">
        <Logo />
        <Separator />

        <div className="flex w-full flex-col items-start gap-5">
          {headerLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <SheetClose asChild key={link.label}>
                <Link
                  href={link.route}
                  className={clsx("flex-center p-medium-16 whitespace-nowrap", {
                    "text-primary-500": isActive,
                  })}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
