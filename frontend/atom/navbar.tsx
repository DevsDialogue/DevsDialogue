"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/theme";
import Image from "next/image";

export function Navbar() {
  return (
    <div className=" w-full flex items-center justify-center">
      <NavbarItem  />
    </div>
  );
}

function NavbarItem({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className="flex items-center justify-between w-full max-w-4xl px-4 py-4 "
    >
      <Menu setActive={setActive}>
        <Image src="/logo.png" width={100} height={100} alt={"logo"} />
        <div className="flex flex-row">
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/web-dev">Web Development</HoveredLink>
        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
        <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
        <ProductItem
          title="Algochurn"
          href="https://algochurn.com"
          src=""
          description="Prepare for tech interviews like never before."
        />
        <ProductItem
          title="Tailwind Master Kit"
          href="https://tailwindmasterkit.com"
          src=""
          description="Production ready Tailwind css components for your next project"
        />
        <ProductItem
          title="Moonbeam"
          href="https://gomoonbeam.com"
          src=""
          description="Never write from scratch again. Go from idea to blog in minutes."
        />
        <ProductItem
          title="Rogue"
          href="https://userogue.com"
          src=""
          description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
        />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/hobby">Hobby</HoveredLink>
        <HoveredLink href="/individual">Individual</HoveredLink>
        <HoveredLink href="/team">Team</HoveredLink>
        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        </div>
       
        <ModeToggle />
      
      </Menu>
    </div>
  );
}
