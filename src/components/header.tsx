"use client";

import Link from "next/link";
import Image from "next/image";
import { User, LogOut, LayoutDashboard, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { mockUser } from "@/lib/data";

const Logo = () => (
  <Link href="/" aria-label="Prime Home Club">
    <Image src="/logo.png" alt="Prime Home Club Logo" width={160} height={40} className="w-32 md:w-40" />
  </Link>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const user = mockUser; // Using mock user for demonstration
  const [isSheetOpen, setSheetOpen] = React.useState(false);


  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("hidden md:flex items-center gap-6 text-sm font-medium", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "text-muted-foreground transition-colors hover:text-foreground",
            (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href) && link.href !== "/#services")) && "text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  const UserMenu = () => {
    if (!user.isLoggedIn) {
      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost">Log in</Button>
          <Button>Sign up</Button>
        </div>
      );
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-9 w-9 rounded-full">
            <Avatar className="h-9 w-9">
              <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png`} alt={user.name || ""} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <NavLinks className="hidden lg:flex" />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
             <Button asChild className="bg-destructive hover:bg-destructive/90">
                <a href="tel:8858585559"><Phone className="mr-2 h-4 w-4" />Call Now</a>
            </Button>
             <UserMenu />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                  <Logo />
                </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="grid gap-4 p-4 text-lg font-medium">
                  {navLinks.map((link) => (
                     <SheetClose key={link.label} asChild>
                        <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                        >
                        {link.label}
                        </Link>
                     </SheetClose>
                  ))}
                </nav>
                 <div className="p-4 mt-auto border-t flex justify-between items-center">
                  <UserMenu />
                   <Button asChild className="bg-destructive hover:bg-destructive/90">
                    <a href="tel:8858585559"><Phone className="mr-2 h-4 w-4" />Call Now</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
