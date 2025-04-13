"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  FileText,
  Menu,
  X,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import Swal from "sweetalert2";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Documentation", href: "/dashboard/docs", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Show confirmation dialog
    Swal.fire({
      title: "Log out?",
      text: "Are you sure you want to log out of your account?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout actions
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        // Show success message
        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          // Redirect to login page
          router.push("/login");
        });
      }
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        className="block md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6 block md:hidden fixed top-7 right-16" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      <div
        className={cn(
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-background border-r",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div
          className={cn(
            "fixed top-0 left-0 z-40 w-[300px] h-screen transition-transform bg-background border-r",
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="h-full flex flex-col justify-between px-3 py-4">
            {/* Top section */}
            <div>
              <div className="mb-10 px-3 py-2">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                {/* <Image src={'/logo.png'} width={200} height={100} alt="logo"></Image> */}
              </div>
              <ul className="space-y-2 font-medium">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center p-3 rounded-lg hover:bg-red-300 group",
                          isActive && "bg-red-500"
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom section (Logout) */}
            <div className="px-3 py-2">
              <button
                onClick={handleLogout}
                className="w-full text-white bg-red-500 hover:bg-red-600 rounded-lg p-3 font-bold"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
