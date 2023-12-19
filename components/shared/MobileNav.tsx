import Image from "next/image";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="align-middle">
        <Image
          src="/assets/icons/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white">
        <Image
          src="/assets/images/logo.svg"
          alt="Evently Logo"
          width={128}
          height={38}
        />

        <Separator />

        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
