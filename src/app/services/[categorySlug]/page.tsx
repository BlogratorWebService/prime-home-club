import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck, Clock, Users, ThumbsUp } from "lucide-react";

import { serviceCategories, services as allServices } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/lead-form";

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

type ServiceCategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export default async function ServiceCategoryPage({ params }: ServiceCategoryPageProps) {
  const { categorySlug } = await params;

  const category = serviceCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryServices = allServices.filter((s) => s.categoryId === category.id);

  // Custom content for TV Repair page
  const isTvRepair = categorySlug === "tv-repair";

  const benefits = [
    { icon: <Users className="h-10 w-10 text-primary" />, title: "Expert Technicians", description: "Certified professionals with years of experience in TV electronics." },
    { icon: <Clock className="h-10 w-10 text-primary" />, title: "Fast, Same-Day Service", description: "We offer quick turnaround to get your entertainment back on track." },
    { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "6-Month Warranty", description: "We stand by our work with a warranty on all repairs and parts." },
    { icon: <ThumbsUp className="h-10 w-10 text-primary" />, title: "Transparent Pricing", description: "Get a clear, upfront quote before any work begins. No hidden fees." },
  ];

  return (
    <div className="bg-background">
      {isTvRepair && (
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 dots-pattern"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
                  Expert TV Repair Services in Mumbai
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-xl text-muted-foreground">
                  From screen replacements to motherboard repairs, we fix all TV brands and models. Get professional, reliable service with a warranty you can trust.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Certified Experts</h3>
                      <p className="text-sm text-muted-foreground">Trained professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Same-Day Service</h3>
                      <p className="text-sm text-muted-foreground">Fast turnaround</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-up animation-delay-300">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-12 md:py-20">
        {!isTvRepair && (
          <div className="mb-12 text-center">
            <category.icon className="h-12 w-12 mx-auto text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
              {category.name} Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {category.description} We offer a range of solutions to meet your needs.
            </p>
          </div>
        )}

        {isTvRepair && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4">
              Our TV Repair Services
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Whether your TV won't turn on, has a cracked screen, or is experiencing sound issues, our expert technicians can diagnose and fix the problem. We service all major brands including Samsung, LG, Sony, Panasonic, and more.
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryServices.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <h4 className="font-semibold">What's included:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4 pt-6">
                {!isTvRepair && (
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Starts at</p>
                    <p>
                      <span className="text-3xl font-bold font-headline text-primary">
                        ₹{service.standardPrice}
                      </span>
                    </p>
                  </div>
                )}
                <Button asChild className={isTvRepair ? "w-full" : "w-full sm:w-auto"}>
                  <Link href={`/services/${category.slug}/${service.slug}`}>
                    View Details & Book
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {isTvRepair && (
          <section className="mt-16 md:mt-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Prime Home Club?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are Mumbai's trusted choice for fast, reliable, and affordable TV repair services.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-headline text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
