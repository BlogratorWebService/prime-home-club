import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import SavingsCalculator from "@/components/savings-calculator";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const benefits = [
  { feature: "Discounted Pricing on All Services", nonMember: false, member: true },
  { feature: "Priority Scheduling", nonMember: false, member: true },
  { feature: "Annual Home Maintenance Check-up", nonMember: false, member: true },
  { feature: "24/7 Emergency Support Line", nonMember: false, member: true },
  { feature: "No Dispatch Fees", nonMember: false, member: true },
  { feature: "Standard Pricing", nonMember: true, member: true },
  { feature: "Access to Vetted Professionals", nonMember: true, member: true },
];

export default function JoinClubPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "join-club-hero");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Join the PrimeHome Club
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Unlock exclusive savings, priority service, and peace of mind for just $149/year.
          </p>
        </div>
      </section>

      {/* Benefits Comparison Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">The Best Way to Care For Your Home</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how a PrimeHome Club membership gives you more value, more savings, and more peace of mind compared to standard service.
            </p>
          </div>

          <Card className="mt-12">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2 font-headline text-lg">Feature</TableHead>
                  <TableHead className="text-center font-headline text-lg">Standard</TableHead>
                  <TableHead className="text-center font-headline text-lg">
                    <span className="flex items-center justify-center gap-2">
                      Club Member
                      <Badge>Best Value</Badge>
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {benefits.map((benefit) => (
                  <TableRow key={benefit.feature}>
                    <TableCell className="font-medium">{benefit.feature}</TableCell>
                    <TableCell className="text-center">
                      {benefit.nonMember ? (
                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-6 w-6 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {benefit.member ? (
                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-6 w-6 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-16 md:py-24 bg-card">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Calculate Your Annual Savings</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Use our simple tool to estimate how much you could save on home services by joining the PrimeHome Club. The more you use, the more you save!
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start">
                            <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                            <span>Average member saves over $300 per year.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                            <span>Savings apply immediately after joining.</span>
                        </li>
                         <li className="flex items-start">
                            <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                            <span>Your membership fee often pays for itself in just one or two service calls.</span>
                        </li>
                    </ul>
                </div>
                <SavingsCalculator />
            </div>
         </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready for a Smarter Way to Manage Your Home?</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            For only $149 a year, get the best service at the best price.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="#">
              Join the Club Now for $149/year
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
