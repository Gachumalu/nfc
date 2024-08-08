"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="MATCHES"
            ></MenuItem>
          </Link>

          <Link href={"/teams"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="TEAMS"
            ></MenuItem>
          </Link>

          <Link href={"/stats"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="STATS"
            ></MenuItem>
          </Link>
          <Link href={"/winners"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="WINNERS"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
