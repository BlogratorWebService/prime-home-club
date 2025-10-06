import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

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
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

type ServiceCategoryPageProps = {
  params: {
    categorySlug: string;
  };
};

export default function ServiceCategoryPage({ params }: ServiceCategoryPageProps) {
  const { categorySlug } = params;
  const category = serviceCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryServices = allServices.filter((s) => s.categoryId === category.id);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-12 text-center">
          <category.icon className="h-12 w-12 mx-auto text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            {category.name} Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description} We offer a range of solutions to meet your needs.
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
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p>
                    <span className="text-3xl font-bold font-headline text-primary">
                      ${service.memberPrice}
                    </span>
                    <Badge variant="secondary" className="ml-2">Member Price</Badge>
                  </p>
                   <p className="text-sm text-muted-foreground line-through">
                      Standard: ${service.standardPrice}
                    </p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <Link href={`/services/${category.slug}/${service.slug}`}>
                    View Details & Book
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
