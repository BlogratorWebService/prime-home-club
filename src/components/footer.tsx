
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "LED TV Repair", href: "/services" },
    { name: "OLED & QLED TV Repair", href: "/services" },
    { name: "Smart TV Repair", href: "/services" },
    { name: "Screen Replacement", href: "/services" },
    { name: "Motherboard Repair", href: "/services" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-2 pr-8">
            <Link href="/" className="text-xl font-bold text-primary font-headline mb-4 inline-block">
              Custom TV Repair
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Your trusted partner for expert TV repair services across all brands and models. Fast, reliable, and always at your doorstep.
            </p>
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
           <div className="col-span-full sm:col-span-2 md:col-span-1">
            <h3 className="font-headline font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Mumbai, Maharashtra</li>
                <li><a href="tel:+918858585559" className="hover:text-primary">Call: +91 88585 85559</a></li>
                <li><a href="mailto:info@customtvrepair.com" className="hover:text-primary">info@customtvrepair.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              &copy; {new Date().getFullYear()} CustomTvRepair.com. All rights reserved.
            </p>
             <p className="text-xs text-muted-foreground">
              Disclaimer: We are an independent service provider and not affiliated with any TV brand.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
