import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-1");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
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
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
              Reliable Home Services, Simplified.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              From plumbing to electrical, get expert help right when you need it. Join the PrimeHome Club for exclusive savings and priority service.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/join-club">Join the Club</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose PrimeHome Hub?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are committed to providing you with the best home service experience. Here's what sets us apart.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-2">Vetted Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every technician is background-checked, licensed, and highly trained to ensure top-quality service and your peace of mind.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-2">Upfront Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No surprises. See the cost before you book. Club members enjoy exclusive discounts on all our services.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline pt-2">Satisfaction Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stand by our work. If you're not 100% satisfied, we'll make it right. Your satisfaction is our priority.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Service Categories Section */}
        <section id="services" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive solutions for a comfortable and safe home. Find the service you need below.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                        <CardDescription className="pt-2">{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <span className="font-semibold text-primary group-hover:underline">
                          View Services <ArrowRight className="inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Join the Club CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Unlock Exclusive Savings & Benefits</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
              Become a PrimeHome Club member today and enjoy discounted pricing, priority scheduling, and members-only perks on every service.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/join-club">
                Learn More & Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
