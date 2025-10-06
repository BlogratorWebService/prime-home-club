import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Star } from "lucide-react";

import { serviceCategories, services as allServices } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CallToAction from "@/components/call-to-action";

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
  params: {
    categorySlug: string;
    serviceSlug: string;
  };
};

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { categorySlug, serviceSlug } = params;
  const category = serviceCategories.find((c) => c.slug === categorySlug);
  const service = allServices.find(
    (s) => s.slug === serviceSlug && s.categoryId === category?.id
  );

  if (!category || !service) {
    notFound();
  }
  
  const serviceImage = PlaceHolderImages.find(img => img.id === 'service-detail-1');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-lg border">
              {serviceImage && (
                <Image
                  src={serviceImage.imageUrl}
                  alt={service.name}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  data-ai-hint={serviceImage.imageHint}
                />
              )}
            </div>
            {/* Add thumbnails here if needed */}
          </div>

          {/* Right Column: Service Details & Booking */}
          <div>
            <div className="mb-4">
              <Link href={`/services/${category.slug}`} className="text-sm font-medium text-primary hover:underline">
                {category.name}
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{service.name}</h1>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-0.5">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400/50 text-yellow-400/50" />
              </div>
              <span className="text-sm text-muted-foreground">(based on reviews)</span>
            </div>

            <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>

            <Card className="my-8 bg-card">
              <CardContent className="p-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Starting From</p>
                  <p className="text-4xl font-bold font-headline tracking-tighter text-primary">
                    ${service.standardPrice}
                  </p>
                </div>
                 <Button asChild size="lg" className="w-full mt-6 bg-destructive hover:bg-destructive/90">
                    <Link href={`/book/${service.slug}`}>
                      Book Service
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-bold font-headline mb-4">What's Included in This Service:</h3>
              <ul className="space-y-3">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
