import { notFound } from "next/navigation";
import { services as allServices } from "@/lib/data";
import BookingForm from "@/components/booking-form";
import { CreditCard, MapPin, Calendar } from "lucide-react";

type BookingPageProps = {
  params: {
    serviceSlug: string;
  };
};

export default function BookingPage({ params }: BookingPageProps) {
  const { serviceSlug } = params;
  const service = allServices.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background min-h-[calc(100vh-8rem)]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold font-headline text-primary">Book Your Service</h1>
            <p className="mt-2 text-muted-foreground">
              You're just a few steps away from scheduling your "{service.name}" service.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Your Details</h3>
                        <p className="text-sm text-muted-foreground">Confirm your contact information.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Schedule</h3>
                        <p className="text-sm text-muted-foreground">Choose a convenient date and time.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Confirm & Pay</h3>
                        <p className="text-sm text-muted-foreground">Review your booking and complete payment.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <BookingForm service={service} />
          </div>
        </div>
      </div>
    </div>
  );
}
