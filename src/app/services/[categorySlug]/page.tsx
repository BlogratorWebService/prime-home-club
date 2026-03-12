import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck, Clock, Users, Phone, MessageCircle, BadgeCheck, ThumbsUp } from "lucide-react";

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

  const trustBadges = [
    { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "ISO Certified", subtitle: "Quality assured service" },
    { icon: <BadgeCheck className="h-6 w-6 text-primary" />, title: "30-Day Guarantee", subtitle: "Peace of mind assured" },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: "Same-Day Service", subtitle: "Fast turnaround" },
    { icon: <Users className="h-6 w-6 text-primary" />, title: "Certified Experts", subtitle: "Trained professionals" },
  ];

  const benefits = [
    { icon: <Users className="h-10 w-10 text-primary" />, title: "Expert Technicians", description: `Certified professionals with years of experience in ${category.name.toLowerCase()}.` },
    { icon: <Clock className="h-10 w-10 text-primary" />, title: "Fast, Same-Day Service", description: "We offer quick turnaround to get your appliances running again." },
    { icon: <BadgeCheck className="h-10 w-10 text-primary" />, title: "30-Day Guarantee", description: "We stand by our work with a 30-day guarantee on all repairs and parts." },
    { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "ISO Certified", description: "Our service meets international quality standards for your complete satisfaction." },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 dots-pattern"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
                Expert {category.name} Services in Mumbai
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-xl text-muted-foreground">
                {category.description} Get professional, reliable service with a guarantee you can trust.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                {trustBadges.map((badge) => (
                  <div key={badge.title} className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                      {badge.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{badge.title}</h3>
                      <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  <a href="tel:+918858585559">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: +91 88585 85559
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-md">
                  <a href="https://wa.me/918858585559" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our {category.name} Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We service all major brands. Our technicians can diagnose and fix any issue — fast, reliable, and with a guarantee.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryServices.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  <h4 className="font-semibold">What&apos;s included:</h4>
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
              <CardFooter className="pt-6">
                <Button asChild className="w-full">
                  <Link href={`/services/${category.slug}/${service.slug}`}>
                    View Details & Book
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Why Choose Section */}
        <section className="mt-16 md:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Prime Home Club?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mumbai&apos;s trusted choice for fast, reliable, and affordable {category.name.toLowerCase()} services.
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
      </div>
    </div>
  );
}
