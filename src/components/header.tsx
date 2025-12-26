
"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Logo = () => (
  <Link href="/" aria-label="Custom TV Repair" className="text-xl font-bold text-primary font-headline">
    Custom TV Repair
  </Link>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);


  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("hidden md:flex items-center gap-6 text-sm font-medium", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "text-muted-foreground transition-colors hover:text-foreground",
            (pathname === link.href || (link.href.startsWith("/#") && pathname === '/')) && "text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <NavLinks className="hidden lg:flex" />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
             <Button asChild variant="outline" className="text-destructive border-destructive hover:bg-destructive/10 hover:text-destructive">
                <a href="tel:8858585559"><Phone className="mr-2 h-4 w-4" />Call Us</a>
            </Button>
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
                 <div className="p-4 mt-auto border-t flex justify-end items-center">
                   <Button asChild className="bg-destructive hover:bg-destructive/90">
                    <a href="tel:8858585559"><Phone className="mr-2 h-4 w-4" />Call Us</a>
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
