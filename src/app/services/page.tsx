
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { serviceCategories, services } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const getImageForService = (serviceId: string) => {
    switch (serviceId) {
      case "cat-1":
        return "/tv.jpeg";
      case "cat-2":
        return "/ac.jpg";
      case "cat-3":
        return "/washing-machine.png";
      case "cat-4":
        return "/refr.jpg";
      case "cat-5":
        return "/geyser.jpg";
      default:
        return "/placeholder.jpg";
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer expert repair and maintenance for a wide range of home appliances. Quality service, guaranteed.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              <div className="flex flex-col items-center text-center mb-10">
                <category.icon className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-3xl font-bold font-headline">{category.name}</h2>
                <p className="mt-2 text-muted-foreground max-w-xl">{category.description}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href={`/services/${category.slug}`}>
                    View All {category.name} Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((service) => service.categoryId === category.id)
                  .map((service) => (
                    <Card key={service.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                       <div className="relative aspect-video w-full">
                         <Image 
                           src={service.imageId ? `/${service.imageId}` : `/${service.slug}.jpg`}
                           alt={service.name}
                           fill
                           className="object-cover"
                         />
                       </div>
                       <CardHeader>
                        <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                        <CardDescription className="pt-2">{service.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto">
                        <Button asChild className="w-full">
                          <Link href={`/services/${category.slug}/${service.slug}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
