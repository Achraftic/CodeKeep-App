import React from "react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import clsx from "clsx";

// Navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },

  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
    const active="home"
  return (
    <header className="">
      <div className="container mx-auto   flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-[#F05454]">
          CodeManager
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 dark:text-light  text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={clsx(" transition-colors hover:text-primary",active===link.name.toLowerCase() && "text-primary")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
                <ToggleTheme/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
