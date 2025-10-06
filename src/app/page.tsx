import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, Wrench, Search, Star, Tv, AirVent, WashingMachine, Refrigerator, Heater } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-3");

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

  const heroFeatures = [
    { title: "Expert Technicians", icon: <Wrench className="h-5 w-5" /> },
    { title: "Home Service", icon: <ShieldCheck className="h-5 w-5" /> },
    { title: "Warranty on Repairs", icon: <CheckCircle className="h-5 w-5" /> },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-destructive via-primary to-primary text-primary-foreground pt-20 pb-20 md:pt-32 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
                  We Bring Your Home Appliances Back to Life
                </h1>
                <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
                  Facing 🛠️ appliance issues? Try Prime Home Club, India's Most Trusted Repairs With Warranty.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                       <Link href="/#services">Book a Service <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                     <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                       <Link href="/#services">View Services</Link>
                    </Button>
                </div>
                <div className="mt-8 flex items-center gap-6 text-sm">
                    {heroFeatures.map(feature => (
                        <div key={feature.title} className="flex items-center gap-2">
                            {feature.icon}
                            <span>{feature.title}</span>
                        </div>
                    ))}
                </div>
              </div>
               <div className="relative hidden md:block">
                  {heroImage && (
                    <Image 
                      src={heroImage.imageUrl} 
                      alt={heroImage.description} 
                      width={500} 
                      height={600} 
                      className="mx-auto rounded-xl shadow-2xl" 
                      data-ai-hint={heroImage.imageHint}
                    />
                  )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Trusted by 10,000+ Customers</h2>
                     <p className="mt-2 text-muted-foreground">Verified ✓</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                         <Card key={index} className="bg-background">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}{testimonial.role && ' • '}{testimonial.date}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">"{testimonial.comment}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        {/* Service Categories Section */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Professional repair services for all your home appliances with expert technicians and warranty.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {serviceCategories.map((category) => {
                const CategoryIcon = category.icon;
                let href = `/services/${category.slug}`;
                if (category.slug === 'tv-repair') {
                  href = '/services/tv-repair';
                } else if (category.slug === 'ac-repair') {
                  href = '/services/ac-repair';
                } else if (category.slug === 'washing-machine-repair') {
                  href = '/services/washing-machine-repair';
                } else if (category.slug === 'refrigerator-repair') {
                    href = '/services/refrigerator-repair';
                }
                return (
                  <Link href={href} key={category.id} className="group">
                    <Card className="overflow-hidden h-full flex flex-col text-center items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card p-6">
                      <CategoryIcon className="h-10 w-10 text-primary mb-4" />
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
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Prime Home Club?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mumbai's most trusted appliance repair service, providing quality solutions for all your home appliances.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center bg-background">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Expert Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Certified professionals with years of experience repairing all types of appliances and electronics.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-background">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Home Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Convenient repairs at your doorstep throughout Mumbai, saving you time and hassle.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-background">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Quick Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Same-day service for most repairs, getting your appliances back to working order faster.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-background">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Quality Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Up to 6 months warranty on repairs and replaced parts for your peace of mind.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-background">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Free Pickup & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We collect and return your appliances for repairs that can't be completed at home.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center bg-background">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Transparent Pricing</CardTitle>
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
