"use client";

import { useState } from "react";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  FileText,
  Menu,
  X,
  Bell,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  // { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Documentation", href: "/dashboard/docs", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogOut = () => {
    // Add your logout logic here
    console.log("Logging out...");
    toast({
      title: "Logged out",
      description: "You have successfully logged out.",
      variant: "default",
      duration: 1000,
      position: "top-left",
      closeButton: true,
      closeOnClick: true,
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    router.push("/login");
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
            "fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-background border-r",
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="h-full flex flex-col justify-between px-3 py-4">
            {/* Top section */}
            <div>
              <div className="mb-10 px-3 py-2">
                {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
                <Image src={'/logo.png'} width={200} height={100} alt="logo"></Image>
              </div> 
              <ul className="space-y-2 font-medium">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center p-3 rounded-lg hover:bg-accent group",
                          isActive && "bg-accent"
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
                onClick={handleLogOut}
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
