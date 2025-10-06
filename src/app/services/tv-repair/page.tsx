import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Calendar, Star, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TVRepairPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "tv-repair-hero");

  const features = [
    { text: "Expert technicians for all TV brands" },
    { text: "Same-day service in most locations" },
    { text: "Genuine replacement parts with warranty" },
    { text: "Smart TV software troubleshooting" },
    { text: "Display calibration and optimization" },
  ];

  const repairProcess = [
    { number: 1, title: "Diagnosis", description: "Comprehensive examination of your TV's hardware and software components." },
    { number: 2, title: "Repair Plan", description: "Detailed assessment with transparent pricing and repair timeline." },
    { number: 3, title: "Expert Repair", description: "Skilled technicians perform repairs using genuine parts and advanced tools." },
    { number: 4, title: "Quality Check", description: "Thorough testing of all functions including smart features and display quality." },
  ];

  const ctaFeatures = [
    { title: "Expert Service", description: "Certified technicians", icon: <Star className="h-6 w-6" /> },
    { title: "Same Day", description: "Fast response time", icon: <Calendar className="h-6 w-6" /> },
    { title: "Warranty", description: "On all repairs", icon: <Wrench className="h-6 w-6" /> },
    { title: "Genuine Parts", description: "Quality components", icon: <CheckCircle className="h-6 w-6" /> },
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
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">TV Repair Services</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Our TV repair service covers all major brands and technologies. From basic LED TVs to premium OLED displays and Smart TVs, we provide expert diagnostics and repairs for display issues, power problems, sound concerns, and smart functionality.
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">Learn About Our Process</Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+918858585559">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
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

      {/* Repair Process Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Repair Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We follow a systematic approach to ensure quality repairs and customer satisfaction.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {repairProcess.map((step) => (
              <Card key={step.number} className="bg-background text-center p-6">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-90 -z-10" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--destructive)))' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Fix Your TV Services?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Contact us now for a quick response and expert service at your doorstep in Mumbai.
          </p>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {ctaFeatures.map((feature, index) => (
              <Card key={index} className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-destructive">{feature.icon}</div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-xs text-primary-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+918858585559">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
