
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    { name: "TV Repair Service", href: "/services/tv-repair" },
    { name: "AC Repair Service", href: "/services/ac-repair" },
    { name: "Washing Machine Repair", href: "/services/washing-machine-repair" },
    { name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
    { name: "Geyser Repair Service", href: "/services/geyser-repair" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Reviews", href: "/#testimonials" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
};

const SocialIcon = ({ href, children, name }: { href: string; children: React.ReactNode; name: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
    <span className="sr-only">{name}</span>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-1 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Prime Home Club Logo" width={160} height={40} />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Mumbai's trusted appliance repair service center, offering expert repairs for TV, AC, Refrigerator, and Geyser with at-home service and warranty.
            </p>
             <p className="text-xs text-muted-foreground mt-4">CIN: U95221MH2024PTC433126</p>
            <p className="text-xs text-muted-foreground">Website Operated By Prime Home Club Pvt. Ltd.</p>
          </div>

          <div className="col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div className="col-span-full sm:col-span-2">
            <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>1st Floor, P 101 Godrej Central Rehab, Chembur, Mumbai, Maharashtra 400071, India</li>
                <li><a href="tel:+918858585559" className="hover:text-primary">Call: +91 88585 85559</a></li>
                <li><a href="mailto:info@primehomeclub.com" className="hover:text-primary">Email: info@primehomeclub.com</a></li>
                <li>Mon-Sat: 9am - 8pm</li>
                <li>Sunday: 10am - 5pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} Prime Home Club. All rights reserved.
            </p>
            <div className="flex gap-4">
              <SocialIcon href="#" name="Facebook"><Facebook className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#" name="Instagram"><Instagram className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#" name="Twitter"><Twitter className="h-5 w-5" /></SocialIcon>
              <SocialIcon href="#" name="YouTube"><Youtube className="h-5 w-5" /></SocialIcon>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-xs text-muted-foreground">
              Disclaimer: We are an independent service provider offering only out-of-warranty television repair services. We are not affiliated with, endorsed by, or authorized by any TV manufacturer, and we do not provide warranty repairs or handle manufacturer warranty claims.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
