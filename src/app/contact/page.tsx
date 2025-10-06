import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're here to help! Reach out to us for any questions or to schedule a service.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Phone className="h-8 w-8 text-primary" />
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">For immediate assistance, give us a call.</p>
              <a href="tel:+918858585559" className="font-semibold text-lg hover:text-primary mt-2 block">+91 88585 85559</a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">For inquiries, email us and we'll get back to you soon.</p>
              <a href="mailto:info@primehomeclub.com" className="font-semibold text-lg hover:text-primary mt-2 block">info@primehomeclub.com</a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <MapPin className="h-8 w-8 text-primary" />
              <CardTitle>Our Office</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                1st Floor, P 101 Godrej Central Rehab, Mumbai, Maharashtra 400071, India
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                   <Label htmlFor="subject">Subject</Label>
                   <Input id="subject" placeholder="e.g., Service Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." rows={6} />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
