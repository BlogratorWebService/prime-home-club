
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

import type { Service } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "./ui/badge";

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  address: z.string().min(5, { message: "Please enter a valid address." }),
  date: z.date({ required_error: "Please select a date." }),
  time: z.string({ required_error: "Please select a time slot." }),
});

type BookingFormProps = {
  service: Service;
};

export default function BookingForm({ service }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const price = service.standardPrice;

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
    },
  });

  async function processBooking(data: z.infer<typeof bookingSchema>) {
    // Simulate API call
    console.log("Booking data:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStep(step + 1);
    setIsCompleted(true);
  }

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
        <div className="flex justify-between items-baseline pt-1">
            <CardDescription>
                Standard Price
            </CardDescription>
            <p>
                <span className="text-2xl font-bold font-headline text-primary">₹{price}</span>
            </p>
        </div>
      </CardHeader>
      <CardContent>
        {isCompleted ? (
            <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold font-headline">Booking Confirmed!</h2>
                <p className="text-muted-foreground mt-2">
                    Your appointment for {service.name} is scheduled. You'll receive an email confirmation shortly.
                </p>
            </div>
        ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processBooking)} className="space-y-8">
            {step === 1 && (
              <div className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="Rahul Sharma" {...field} /></FormControl>
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
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel>Select a Date</FormLabel>
                    <FormControl>
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                            initialFocus
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}/>
                <FormField control={form.control} name="time" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select a Time Slot</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger><SelectValue placeholder="Choose an available time" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="09:00">9:00 AM - 11:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM - 1:00 PM</SelectItem>
                            <SelectItem value="13:00">1:00 PM - 3:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM - 5:00 PM</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}/>
              </div>
            )}
            {step === 3 && (
                <div>
                    <h3 className="text-lg font-semibold font-headline">Review Your Booking</h3>
                    <div className="mt-4 space-y-2 p-4 border rounded-md bg-muted/50">
                        <p><strong>Service:</strong> {service.name}</p>
                        <p><strong>Name:</strong> {form.getValues("name")}</p>
                        <p><strong>Date:</strong> {form.getValues("date")?.toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {form.getValues("time")}</p>
                        <p className="font-bold text-primary text-lg pt-2">Total: ₹{price}</p>
                    </div>
                     <div className="mt-6">
                        <h4 className="font-semibold mb-2">Payment Information</h4>
                        <p className="text-sm text-muted-foreground">Mock payment section. In a real app, a payment gateway element would be here.</p>
                        <div className="mt-2 p-4 border border-dashed rounded-md h-24 flex items-center justify-center text-muted-foreground">
                            [Payment Gateway Placeholder]
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                        Same-day service available in most areas. Subject to technician availability.
                    </p>
                </div>
            )}
          </form>
        </Form>
        )}
      </CardContent>
      {!isCompleted && (
        <CardFooter className="flex flex-col-reverse sm:flex-row sm:justify-between gap-2">
          <Button variant="outline" onClick={prevStep} disabled={step === 1} className="w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
          {step < 3 ? (
            <Button onClick={nextStep} className="w-full sm:w-auto">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={form.handleSubmit(processBooking)} className="bg-destructive hover:bg-destructive/90 w-full sm:w-auto" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Processing..." : `Confirm & Pay ₹${price}`}
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
