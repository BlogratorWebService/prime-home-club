"use client";

import Link from "next/link";
import { CheckCircle, Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ThankYouPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4 text-primary">
            Thank You for Your Request!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We've received your service request and our team will contact you shortly.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold font-headline mb-4">What Happens Next?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will call you within the next few minutes to confirm your request.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Schedule Service</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll schedule a convenient time for our technician to visit your home.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Service</h3>
                    <p className="text-sm text-muted-foreground">
                      Our certified technician will arrive on time and fix your appliance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href="https://wa.me/918858585559" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2">
              <a href="tel:+918858585559">
                <Phone className="mr-2 h-4 w-4" />
                Call: +91 88585 85559
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t">
            <Button asChild variant="link" className="text-primary">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
