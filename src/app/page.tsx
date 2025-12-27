

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Star, ShieldCheck, Truck, Clock, Award, Users, ThumbsUp, Loader2, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { serviceCategories } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";


const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  brand: z.string().min(2, "Please enter the appliance brand."),
  issue: z.string().min(5, "Please describe the issue."),
});

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { toast } = useToast();

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    brand: "",
    issue: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState("");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validationResult = leadFormSchema.safeParse(formState);
    if (!validationResult.success) {
      const newErrors: { [key: string]: string } = {};
      validationResult.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      
      const message = `Hello, I'm ${validationResult.data.name} and I need help with my ${validationResult.data.brand} appliance. The issue is: ${validationResult.data.issue}`;
      setWhatsAppMessage(encodeURIComponent(message));
      
      setFormState({ name: "", phone: "", brand: "", issue: "" });
      setShowWhatsAppDialog(true);

    } catch (error: any) {
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: error.message || "Could not submit your request. Please try again later.",
        });
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    }
  };

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Local Guide",
      date: "2 days ago",
      comment: "Excellent service! The technician was professional and fixed my AC in no time. Highly recommended!",
      stars: 5,
    },
    {
      name: "Priya Patel",
      role: "",
      date: "1 week ago",
      comment: "Best TV repair service in Mumbai. Very reasonable rates and quick response time.",
      stars: 5,
    },
    {
        name: "Amit Kumar",
        role: "Local Guide",
        date: "2 weeks ago",
        comment: "Great experience with refrigerator repair. The technician was well-trained and used genuine parts.",
        stars: 5,
    }
  ];

  const popularServices = [
      { name: "TV Repair", href: "/services/tv-repair"},
      { name: "AC Repair", href: "/services/ac-repair"},
      { name: "Washing Machine", href: "/services/washing-machine-repair"},
      { name: "Appliance Repair", href: "/services"},
  ]


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section with Form */}
        <section className="relative w-full bg-cover bg-center dots-pattern">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary tracking-tight">
                  We Bring Your Home Appliances Back to Life
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-muted-foreground">
                  The most trusted appliance repair service in Mumbai. Fast, reliable, and at your doorstep. Get a free quote now!
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Transparent Pricing</h3>
                      <p className="text-muted-foreground">No hidden fees. What we quote is what you pay.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">Quick Response</h3>
                      <p className="text-muted-foreground">We'll contact you within the hour during business hours.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="w-full shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Get a Free Quote</CardTitle>
                  <CardDescription>Fill out the form for a no-obligation quote.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Enter your name" value={formState.name} onChange={handleFormChange} />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                     <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" placeholder="Enter your phone number" value={formState.phone} onChange={handleFormChange} />
                       {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="brand">Appliance Brand</Label>
                      <Input id="brand" name="brand" placeholder="e.g., Samsung, LG, Whirlpool" value={formState.brand} onChange={handleFormChange} />
                       {errors.brand && <p className="text-destructive text-sm mt-1">{errors.brand}</p>}
                    </div>
                     <div>
                      <Label htmlFor="issue">Describe the Issue</Label>
                      <Textarea id="issue" name="issue" placeholder="e.g., TV screen is blank, AC is not cooling" value={formState.issue} onChange={handleFormChange} />
                       {errors.issue && <p className="text-destructive text-sm mt-1">{errors.issue}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="animate-spin" /> : "Get My Free Quote"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Search & Popular Services Section */}
        <section className="py-12 bg-card border-b">
            <div className="container mx-auto px-4">
                 <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                    <div className="relative">
                        <Input 
                        placeholder="What service are you looking for? (e.g., AC repair)" 
                        className="h-14 text-base shadow-sm pr-28"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        />
                        <Button 
                            type="submit"
                            size="lg" 
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-10"
                        >
                            <Search className="h-5 w-5 mr-2" /> Search
                        </Button>
                    </div>
                </form>
                 <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <span className="font-semibold text-muted-foreground">Popular:</span>
                    {popularServices.map(service => (
                        <Button key={service.name} variant="outline" size="sm" asChild>
                            <Link href={service.href}>{service.name}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Trusted by 1,000+ Customers</h2>
                     <p className="mt-2 text-muted-foreground flex items-center justify-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        Verified Reviews
                     </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                         <Card key={index} className="bg-card animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <Avatar>
                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}{testimonial.role && ' • '}{testimonial.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-0.5 mb-4">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    {[...Array(5 - testimonial.stars)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400/50" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground">"{testimonial.comment}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        {/* Service Categories Section */}
        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Professional repair services for all your home appliances with expert technicians and warranty.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
              {serviceCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                let href = `/services/${category.slug}`;
                
                return (
                  <Link href={href} key={category.id} className="group">
                    <Card className="overflow-hidden h-full flex flex-col text-center items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background p-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <CategoryIcon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="font-headline text-lg font-semibold">
                          {category.name}
                      </h3>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Prime Home Club?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mumbai's most trusted appliance repair service, providing quality solutions for all your home appliances.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <CardHeader>
                  <Users className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Expert Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Certified professionals with years of experience repairing all types of appliances and electronics.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <CardHeader>
                    <Truck className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Home Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Convenient repairs at your doorstep throughout Mumbai, saving you time and hassle. Available across Mumbai & suburbs.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                    <Clock className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Quick Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Same-day service for most repairs. Service appointment subject to technician availability. Standard service window within same day where possible.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                <CardHeader>
                    <Award className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Quality & Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground flex flex-col items-center gap-2">
                    <span>Up to 6 months warranty on repairs and replaced parts for your peace of mind.</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-foreground"><ShieldCheck className="h-4 w-4 text-primary"/>Genuine / OEM spare parts used.</span>
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <CardHeader>
                    <ThumbsUp className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Free Pickup & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We collect and return your appliances for repairs that can't be completed at home.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '750ms' }}>
                <CardHeader>
                    <ShieldCheck className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clear, upfront quotes with no hidden charges or unexpected fees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

       <AlertDialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Thank you for your request!</AlertDialogTitle>
            <AlertDialogDescription>
              Your quote request has been submitted successfully. Our team will get in touch with you shortly. For an even faster response, you can contact us directly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
            <AlertDialogAction asChild>
              <a href={`https://wa.me/918858585559?text=${whatsAppMessage}`} target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 hover:bg-green-600">
                Contact on WhatsApp
              </a>
            </AlertDialogAction>
            <AlertDialogAction asChild>
                <a href="tel:+918858585559" className="w-full">
                    <Phone className="mr-2 h-4 w-4"/> Call Now
                </a>
            </AlertDialogAction>
             <Button variant="outline" onClick={() => setShowWhatsAppDialog(false)} className="w-full mt-2 sm:mt-0">
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
