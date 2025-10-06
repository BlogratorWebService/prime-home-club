
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Check, SearchX } from "lucide-react";
import { services as allServices, serviceCategories } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  if (!query) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold font-headline">Search for a service</h1>
        <p className="text-muted-foreground mt-2">
          Please enter a search term in the search bar on the homepage.
        </p>
      </div>
    );
  }

  const filteredServices = allServices.filter(
    (service) =>
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
        Search Results for "{query}"
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Found {filteredServices.length} matching service{filteredServices.length !== 1 ? 's' : ''}.
      </p>

      {filteredServices.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {filteredServices.map((service) => {
            const category = serviceCategories.find(
              (c) => c.id === service.categoryId
            );
            if (!category) return null;

            return (
              <Card key={service.id} className="flex flex-col">
                <CardHeader>
                  <Link href={`/services/${category.slug}/${service.slug}`}>
                    <CardTitle className="font-headline text-2xl hover:text-primary transition-colors">
                      {service.name}
                    </CardTitle>
                  </Link>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <h4 className="font-semibold">What's included:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.details.slice(0, 3).map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4 pt-6">
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Starts at</p>
                    <p>
                      <span className="text-3xl font-bold font-headline text-primary">
                        ${service.standardPrice}
                      </span>
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
            );
          })}
        </div>
      ) : (
        <div className="mt-16 text-center">
            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <SearchX className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold font-headline">No Results Found</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                We couldn't find any services matching your search. Try a different term or browse our services.
            </p>
            <Button asChild className="mt-6">
                <Link href="/#services">Browse All Services</Link>
            </Button>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="bg-background min-h-[calc(100vh-8rem)]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
