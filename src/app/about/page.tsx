import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          About Prime Home Club
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your trusted partner in home appliance repair and maintenance.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="https://picsum.photos/seed/aboutus/800/600"
            alt="Our Team"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            data-ai-hint="team work"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
          <p className="text-muted-foreground">
            At Prime Home Club, our mission is to provide reliable, efficient, and affordable appliance repair services to the residents of Mumbai. We understand how disruptive a broken appliance can be, and we're committed to restoring your home's comfort and functionality as quickly as possible.
          </p>
          <p className="text-muted-foreground">
            We believe in transparent pricing, quality workmanship, and exceptional customer service. Our team of certified technicians is equipped to handle a wide range of appliance issues, ensuring a hassle-free experience from start to finish.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Core Values
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Customer First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority. We listen to your needs and strive to exceed your expectations with every service call.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Integrity & Honesty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide upfront pricing and honest recommendations. You'll never have to worry about hidden fees or unnecessary repairs.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Quality & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
               Our technicians are highly trained and use only genuine parts to ensure lasting repairs and the longevity of your appliances.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
