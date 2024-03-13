"use client";
import { SidebarItem } from "./SidebarItem";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "./icnos";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarItems = [
    { href: "/perfido", text: "Home", icon: <Icon1 /> },
    {
      href: "/perfido/projects",
      text: "Projects",
      icon: <Icon2 />,
    },
    {
      href: "/perfido/excution",
      text: "Excution",
      icon: <Icon3 />,
    },
    {
      href: "/perfido/dashboard",
      text: "Dashboard",
      icon: <Icon4 />,
    },
    {
      href: "/perfido//history",
      text: "History",
      icon: <Icon5 />,
    },
    // ... Add other sidebar items similarly
  ];

  return (
    <div className="p-3 space-y-4 border-r max-lg:hidden h-full">
      {sidebarItems.map((item) => (
        <SidebarItem
          key={item.href}
          href={item.href}
          text={item.text}
          icon={item.icon}
          pathname={pathname}
        />
      ))}
    </div>
  );
};

export default Sidebar;
