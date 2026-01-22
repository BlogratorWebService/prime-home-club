
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

import type { Service } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
});

type BookingFormProps = {
  service: Service;
};

export default function BookingForm({ service }: BookingFormProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
    },
  });

  async function processBooking(data: z.infer<typeof bookingSchema>) {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          service: service.name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setIsCompleted(true);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again or contact us directly.');
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
        <CardDescription>
          Fill out the form below to schedule your service
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processBooking)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="Rahul Sharma" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><Input placeholder="+91 98765 43210" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control} name="address" render={({ field }) => (
              <FormItem>
                <FormLabel>Service Address</FormLabel>
                <FormControl><Input placeholder="123, B-Wing, Andheri West, Mumbai" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}/>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button onClick={form.handleSubmit(processBooking)} className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Booking"}
        </Button>
      </CardFooter>

      <Dialog open={isCompleted} onOpenChange={setIsCompleted}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <DialogTitle className="text-center text-2xl font-bold font-headline">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-center mt-2 text-base">
              Your booking for {service.name} has been confirmed. We'll contact you shortly to finalize the details.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-6">
            <p className="text-sm text-center text-muted-foreground mb-2">
              Need immediate assistance? Contact us now:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1" variant="outline">
                <a href="tel:+918858585559" className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                <a href={`https://wa.me/918858585559?text=Hello, I just booked ${encodeURIComponent(service.name)} service.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
