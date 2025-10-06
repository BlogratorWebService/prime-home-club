import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export default function GeyserRepairPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "geyser-repair-hero");

  const features = [
    { text: "Emergency repair services" },
    { text: "Safety inspection included" },
    { text: "All geyser brands covered" },
    { text: "Energy efficiency checks" },
    { text: "Preventive maintenance" },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/#services" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-2">Professional Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Geyser Repair Services</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Our geyser repair service ensures you have reliable hot water throughout the year. We provide expert repairs for all types of water heaters, from storage to instant geysers, with safety checks and maintenance services.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">Learn About Our Process</Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+918858585559">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +91 88585 85559
                  </a>
                </Button>
                <Button size="lg" variant="secondary" className="bg-green-500 hover:bg-green-600 text-white">
                  WhatsApp Now
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
