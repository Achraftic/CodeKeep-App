import React from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import clsx from "clsx";
import { Button } from "./ui/button";
import { AlignLeft } from "lucide-react";

// Navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },

  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const active = "home"
  return (
    <header className="">
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/" className="text-2xl flex-1/2 font-semibold text-[#F05454]">
          CodeManager
        </Link>
        <nav className="md:flex hidden justify-between w-full items-center">


          <ul className="flex space-x-6 dark:text-light  text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={clsx(" transition-colors hover:text-primary", active === link.name.toLowerCase() && "text-primary")}
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>
          <div className="flex gap-4 items-center">

            <Button asChild size="sm" variant="link">
              <Link href="/login">Log in</Link>

            </Button>
            <Button asChild size="sm" variant="soft">
              <Link href="/signup">Sign up</Link>
            </Button>

            <ToggleTheme />

          </div>
        </nav>

        <AlignLeft size={32} className="text-foreground md:hidden cursor-pointer" />


      </div>
    </header>
  );
};

export default Header;
