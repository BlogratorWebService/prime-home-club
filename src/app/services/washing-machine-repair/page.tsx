import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import CallToAction from "@/components/call-to-action";
import { Card } from "@/components/ui/card";

export default function WashingMachineRepairPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "washing-machine-repair-hero");
  const serviceName = "Washing Machine Repair";
  const whatsappMessage = `https://wa.me/918858585559?text=Hello, I'm interested in the ${encodeURIComponent(serviceName)} service.`;

  const features = [
    { text: "Expert technicians for all washing machine brands" },
    { text: "Same-day service availability" },
    { text: "Genuine replacement parts with warranty" },
    { text: "Complete diagnostic assessment" },
    { text: "Preventive maintenance services" },
  ];
  
  const repairProcess = [
    { number: 1, title: "Diagnosis", description: "Comprehensive check of motor, drum, and electronics." },
    { number: 2, title: "Repair Plan", description: "Transparent quote and clear timeline for the repair work." },
    { number: 3, title: "Expert Repair", description: "Repairs done with genuine parts by skilled technicians." },
    { number: 4, title: "Quality Check", description: "Full cycle test to ensure your machine runs perfectly." },
  ];

  return (
    <div className="bg-background text-foreground animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fade-in-up">
            <Link href="/#services" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge variant="secondary" className="mb-2">Professional Service</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Washing Machine Repair Services</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Our washing machine repair service covers all major brands and models. From front-loading to top-loading machines, we diagnose and fix issues like motor problems, water leaks, drainage issues, and control panel malfunctions with expert precision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-6">
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
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild className="bg-green-500 hover:bg-green-600 text-white">
                   <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 animate-fade-in-up animation-delay-300">
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

       {/* Repair Process Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Repair Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We follow a systematic approach to ensure quality repairs and customer satisfaction.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {repairProcess.map((step, index) => (
              <Card key={step.number} className="bg-background text-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative flex justify-center items-center mb-4">
                  <div className="absolute h-12 w-12 rounded-full bg-primary/10"></div>
                  <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold font-headline">{step.number}</div>
                </div>
                <h3 className="text-xl font-bold font-headline mt-4">{step.title}</h3>
                <p className="text-muted-foreground mt-2">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
