import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, Wrench, Tv, AirVent, WashingMachine, Refrigerator, Heater } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-1");

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

  const features = [
    { title: "All Brands Serviced", icon: <Wrench/> },
    { title: "Home Service", icon: <ShieldCheck/> },
    { title: "Warranty on Repairs", icon: <CheckCircle/> },
    { title: "Same Day Service", icon: <CheckCircle/> },
    { title: "4.9 Star Rating", icon: <CheckCircle/> },
    { title: "Genuine Parts", icon: <CheckCircle/> },
  ]


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Mumbai's Premier Appliance Repair Service
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
             Try Prime Home Club, India's Most Trusted Repairs With Warranty. Expert Appliance Repairs.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <a href="tel:8858585559">Call Us: 88585 85559</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {features.map(feature => (
                        <div key={feature.title} className="flex flex-col items-center">
                            <div className="text-primary">{feature.icon}</div>
                            <h3 className="mt-2 font-semibold">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Booking and Image section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold font-headline text-primary">Book TV / AC / Refrigerator / Geyser Repair</h2>
                        <p className="text-muted-foreground mt-2">Quick response guaranteed</p>
                        <form className="mt-6 space-y-4">
                            <Input placeholder="Your Name" />
                            <Input placeholder="Phone Number" type="tel" />
                            <Button type="submit" className="w-full" size="lg">Request Service</Button>
                        </form>
                    </div>
                     <div>
                        <Image src="https://picsum.photos/seed/tech/600/400" alt="Technician" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="tv repair technician"/>
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold font-headline">Expert Technicians</h3>
                            <p className="text-muted-foreground">Trained & certified professionals</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Trusted by 10,000+ Customers</h2>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                         <Card key={index} className="text-center">
                            <CardHeader>
                                <div className="flex items-center justify-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                        {testimonial.role && <p className="text-sm text-muted-foreground">{testimonial.role}</p>}
                                    </div>
                                </div>
                                 <p className="text-xs text-muted-foreground pt-2">{testimonial.date}</p>
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
                const categoryImage = PlaceHolderImages.find(img => img.id === category.imageId);
                return (
                  <Link href={`/services/${category.slug}`} key={category.id} className="group">
                    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="relative h-48 w-full">
                        {categoryImage && (
                          <Image
                            src={categoryImage.imageUrl}
                            alt={category.name}
                            fill
                            className="object-cover"
                            data-ai-hint={categoryImage.imageHint}
                          />
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                          <category.icon className="h-6 w-6 text-primary" />
                          {category.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                         <Button asChild variant="link" className="p-0">
                            <span>Book Service <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                         </Button>
                      </CardContent>
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
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Expert Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Certified professionals with years of experience repairing all types of appliances and electronics.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Home Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Convenient repairs at your doorstep throughout Mumbai, saving you time and hassle.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Quick Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Same-day service for most repairs, getting your appliances back to working order faster.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Quality Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Up to 6 months warranty on repairs and replaced parts for your peace of mind.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center">
                <CardHeader>
                  <CardTitle className="font-headline pt-2">Free Pickup & Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We collect and return your appliances for repairs that can't be completed at home.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center">
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
