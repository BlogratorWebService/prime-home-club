import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "TV Repair Service", href: "/services/tv-repair" },
    { name: "AC Repair Service", href: "/services/ac-repair" },
    { name: "Washing Machine Repair", href: "/services/washing-machine-repair" },
    { name: "Refrigerator Repair Service", href: "/services/refrigerator-repair" },
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
    { name: "Cookie Policy", href: "#" },
    { name: "Data Deletion", href: "#" },
  ],
};

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-muted-foreground hover:text-primary">
    <span className="sr-only">{children}</span>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 pr-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Prime Home Club Logo" width={40} height={40} />
              <span className="text-xl font-bold font-headline text-primary">
                Prime Home Club
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Mumbai's trusted appliance repair service center, offering expert repairs for TV, AC, Refrigerator, and Geyser with at-home service and warranty.
            </p>
             <p className="text-xs text-muted-foreground mt-4">CIN: U95221MH2024PTC433126</p>
            <p className="text-xs text-muted-foreground">Website Operated By Prime Home Club Pvt. Ltd.</p>
          </div>

          <div>
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
          <div>
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
           <div>
            <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>1st Floor, P 101 Godrej Central Rehab, Mumbai, Maharashtra 400071, India</li>
                <li><a href="tel:+918858585559" className="hover:text-primary">+91 88585 85559</a></li>
                <li><a href="mailto:info@primehomeclub.com" className="hover:text-primary">info@primehomeclub.com</a></li>
                <li>Mon-Sat: 9am - 8pm</li>
                <li>Sunday: 10am - 5pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear() + 1} Prime Home Club. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground flex gap-4">
             <Link href="#" className="hover:text-primary">Privacy Policy</Link>
             <Link href="#" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
