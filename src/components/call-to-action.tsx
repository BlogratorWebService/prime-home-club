import Link from "next/link";
import { Phone, Star, Calendar, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaFeatures = [
    { title: "Expert Service", description: "Certified technicians", icon: <Star className="h-6 w-6" /> },
    { title: "Same Day", description: "Fast response time", icon: <Calendar className="h-6 w-6" /> },
    { title: "Warranty", description: "On all repairs", icon: <Wrench className="h-6 w-6" /> },
    { title: "Genuine Parts", description: "Quality components", icon: <CheckCircle className="h-6 w-6" /> },
];


export default function CallToAction() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="rounded-xl bg-gradient-to-r from-destructive to-primary p-8 md:p-12 text-center text-primary-foreground">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Fix Your Services?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
                        Contact us now for a quick response and expert service at your doorstep in Mumbai.
                    </p>
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {ctaFeatures.map((feature, index) => (
                        <Card key={index} className="bg-white/10 border-white/20 text-white">
                            <CardContent className="p-6 text-center">
                            <div className="mb-3 mx-auto w-fit text-white">{feature.icon}</div>
                            <h3 className="font-semibold text-white">{feature.title}</h3>
                            <p className="text-xs text-white/80">{feature.description}</p>
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
            </div>
      </section>
    )
}