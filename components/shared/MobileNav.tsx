import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="align-middle">
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-white">
        <Logo />
        <Separator />
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
