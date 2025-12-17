import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmbeddedForm from "@/components/embedded-form";


export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We're here to help! Reach out to us for any questions or to schedule a service in Mumbai.
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
                1st Floor, P 101 Godrej Central Rehab, Chembur, Mumbai, Maharashtra 400071, India
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="h-[450px]">
              <EmbeddedForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}