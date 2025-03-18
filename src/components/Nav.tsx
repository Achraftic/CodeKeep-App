"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const usefulLinks = [
    {
      title: "Dashboard",
      href: "/dashboard",
      description: "Manage your code snippets efficiently in one place."
    },
    {
      title: "Documentation",
      href: "/docs",
      description: "Learn how to use Code Manager with our comprehensive guides."
    },
    {
      title: "Community",
      href: "/community",
      description: "Join discussions and share ideas with other developers."
    },
    {
      title: "Pricing",
      href: "/pricing",
      description: "Explore our flexible plans and choose the best for you."
    },
    {
      title: "Support",
      href: "/support",
      description: "Need help? Contact our support team for assistance."
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Stay updated with the latest coding tips and trends."
    }
  ];
  

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      
        <NavigationMenuItem>
          <NavigationMenuTrigger>Usefull Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {usefulLinks.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted-foreground/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-foreground/50">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
