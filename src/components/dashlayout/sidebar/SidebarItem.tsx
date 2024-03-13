import Link from "next/link";

export const SidebarItem = ({ href, text, icon, pathname }:any) => (
    <Link
      href={href}
      className={`flex text-[#666] items-center space-x-2 hover:bg-secondary hover:text-white px-4 py-2 rounded-lg ${
        pathname === href ? "text-white bg-secondary" : ""
      }`}
   
    >
      <div>{icon}</div>
      {text && <div>{text}</div>}
    </Link>
  );