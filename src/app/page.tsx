
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Star, ShieldCheck, Truck, Clock, Award, Users, ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

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
        {/* Hero Section */}
        <section className="relative bg-primary/5 animate-fade-in">
           <div className="absolute inset-0 dots-pattern -z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-primary -z-20 hidden md:block"></div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="py-16 md:py-32 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
                            We Bring Your Home Appliances Back to Life
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                            We are Committed to Provide you a Safe Service Experience in Mumbai.
                        </p>
                        
                        <form onSubmit={handleSearch} className="mt-8">
                            <div className="relative">
                                <Input 
                                placeholder="What are you looking for?" 
                                className="h-14 text-base shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                />
                                <Button 
                                    type="submit"
                                    size="lg" 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 h-10 bg-destructive hover:bg-destructive/90 rounded-full"
                                >
                                    <Search className="h-5 w-5" />
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <span className="font-semibold">Popular:</span>
                            {popularServices.map(service => (
                                <Button key={service.name} variant="outline" size="sm" asChild>
                                    <Link href={service.href}>{service.name}</Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="relative hidden md:block h-full min-h-[500px] z-10">
                        <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-48 h-48 bg-destructive/10 rounded-full -z-10 animate-pulse"></div>
                        <div className="absolute right-0 bottom-0 w-32 h-32 dots-pattern -z-10"></div>

                        <Image 
                        src="/person.png" 
                        alt="Prime Home Club Technician" 
                        layout="fill"
                        objectFit="contain"
                        className="z-10"
                        />
                         <Card className="absolute bottom-8 left-8 backdrop-blur-sm bg-background/80 shadow-lg animate-fade-in-up animation-delay-300 z-20">
                            <CardContent className="p-4 flex items-center gap-4">
                                <Avatar className="h-12 w-12 border-2 border-destructive">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=a`} />
                                    <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm">537+ Happy Clients</p>
                                    <p className="text-xs text-muted-foreground">See our reviews</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="absolute top-8 right-8 backdrop-blur-sm bg-background/80 shadow-lg animate-fade-in-up animation-delay-500 z-20">
                            <CardContent className="p-4 flex items-center gap-3">
                               <div className="flex gap-1">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                               </div>
                                <p className="font-semibold text-sm">5-Star Service</p>
                            </CardContent>
                        </Card>
                    </div>
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
                    Convenient repairs at your doorstep throughout Mumbai, saving you time and hassle.
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
                    Same-day service for most repairs, getting your appliances back to working order faster.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-card p-4 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
                <CardHeader>
                    <Award className="h-10 w-10 mx-auto text-primary mb-2"/>
                  <CardTitle className="font-headline text-xl pt-2">Quality Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Up to 6 months warranty on repairs and replaced parts for your peace of mind.
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
    </div>
  );
}

    