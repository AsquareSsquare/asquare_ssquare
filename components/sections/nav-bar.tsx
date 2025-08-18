import React from "react";
import { Code } from "lucide-react";
import NavItems from "@/components/common/nav-items";
import { Button } from "@/components/ui/button";
import MobileNavItems from "@/components/common/mobile-nav-items";
import Feedback from "@/components/common/feedback";

function NavBar() {
  return (
    <section
      id="nav-bar"
      className="border-b fixed right-0 left-0 top-0 bg-white/70 z-50 backdrop-blur-lg shadow-sm"
    >
      <div className="max-w-7xl mx-auto py-2 flex items-center justify-between px-4">
        {/*LOGO*/}
        <div className="flex items-center gap-3">
          <div className="bg-primary size-9 text-white flex items-center justify-center rounded-lg">
            <Code size={18} />
          </div>
          <p className="text-slate-600 font-bold">
            A<sup>2</sup>S<sup>2</sup>
          </p>
        </div>
        {/*NAV ITEMS*/}
        <NavItems />
        <div className="flex items-center gap-3">
          <Button className="hidden 2md:flex">Get quote</Button>
          <Feedback />
          <MobileNavItems />
        </div>
      </div>
    </section>
  );
}

export default NavBar;
