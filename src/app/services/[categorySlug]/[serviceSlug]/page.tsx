import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Phone, CheckCircle, MessageCircle } from "lucide-react";

import { serviceCategories, services as allServices } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CallToAction from "@/components/call-to-action";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return allServices.map((service) => {
    const category = serviceCategories.find(c => c.id === service.categoryId);
    return {
      categorySlug: category?.slug,
      serviceSlug: service.slug,
    }
  });
}

type ServiceDetailPageProps = {
  params: Promise<{
    categorySlug: string;
    serviceSlug: string;
  }>;
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { categorySlug, serviceSlug } = await params;
  const category = serviceCategories.find((c) => c.slug === categorySlug);
  const service = allServices.find(
    (s) => s.slug === serviceSlug && s.categoryId === category?.id
  );

  if (!category || !service) {
    notFound();
  }

  const whatsappMessage = `https://wa.me/918858585559?text=Hello, I'm interested in the ${encodeURIComponent(service.name)} service.`;

  // Check if this is a TV repair service
  const isTvRepair = categorySlug === "tv-repair";

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {isTvRepair && (
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm md:text-base text-muted-foreground mb-2">
              Prime Home Club - Trusted TV repair & application Service in Mumbai
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-2">
              Prime Home Club - Professional TV repair Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              LED, OLED, QLED & Smart TV repair at your home in Mumbai
            </p>
          </div>
        )}
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column: Service Details */}
          <div className="flex flex-col">
            <Badge variant="secondary" className="mb-6 w-fit bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-1.5 font-medium">
              Expert Service
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4 md:mb-6 leading-tight">{service.name}</h1>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {service.details.slice(0, 5).map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-50 p-1.5 mt-0.5 shrink-0">
                    <Check className="h-3.5 w-3.5 text-blue-700 stroke-[3]" />
                  </div>
                  <span className="text-sm md:text-base text-foreground leading-relaxed font-medium">{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto flex-wrap">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                <Link href={`/book/${service.slug}`}>
                  Learn About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <a href="tel:+918858585559">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91 88585 85559
                </a>
              </Button>

              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-md">
                <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Whatsapp Now
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-first md:order-last">
            <div className="aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-3xl border-2 shadow-xl">
              <Image
                src={service.imageId ? `/${service.imageId}` : `/${service.slug}.jpg`}
                alt={service.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Service Information */}
        {service.details.length > 5 && (
          <div className="mt-12 md:mt-16">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold font-headline mb-6">Complete Service Package:</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <CallToAction />
    </div>
  );
}
