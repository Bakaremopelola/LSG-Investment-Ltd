"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout, MdOutlineClass, MdAssignment } from "react-icons/md";
import { Menu, ChevronLeft } from "lucide-react";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname(); // Get the current URL path

  // Sidebar links
  const links = [
    { name: "Dashboard", icon: <LuLayoutDashboard size={20} />, path: "/admin" },
    { name: "Quotations", icon: <MdOutlineClass size={20} />, path: "/admin/quote" },
    { name: "Buyers", icon: <MdAssignment size={20} />, path: "/admin/buyers" },
  ];

  return (
    <div
      className={`min-h-[70vh] bg-blue-700 text-white flex flex-col justify-between p-4 shadow-md sticky top-0 transition-all duration-300 
      ${isCollapsed ? "w-20" : "w-64"}`}
    >
      {/* Sidebar Header (Title + Toggle Button) */}
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && (
          <h2 className="text-2xl font-bold flex">
            <span className="h-8 w-8 flex rounded-lg justify-center items-center bg-red-400">
              A
            </span>{" "}
            dmin
          </h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-blue-800 hover:bg-blue-900"
        >
          {isCollapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  pathname === link.path
                    ? "bg-blue-800"
                    : "hover:bg-blue-600"
                }`}
              >
                {link.icon}
                {!isCollapsed && <span className="ml-3">{link.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="flex items-center p-2 w-full rounded-lg hover:bg-blue-600 transition-colors">
          <MdLogout size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
