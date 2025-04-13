"use client";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 w-full border mt-4 rounded-lg border-red-400 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex  items-center justify-between">
        <div className="text-start space-y-0.5 p-4">
          <p className="text-sm md:text-xl font-light">
            {"Welcome, Jane Cooper"}
          </p>
          <p className="text-sm md:text-xl">{"Have a nice day!"}</p>
        </div>
        <div className="hidden md:block w-64" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-4">
            <Link href={"/dashboard/notifications"}>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </Link>
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={"/user.avif"} alt={user?.name} />
                    <AvatarFallback>
                      {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
