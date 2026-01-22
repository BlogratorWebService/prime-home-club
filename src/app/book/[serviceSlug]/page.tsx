import { notFound } from "next/navigation";
import { services as allServices } from "@/lib/data";
import BookingForm from "@/components/booking-form";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

type BookingPageProps = {
  params: Promise<{
    serviceSlug: string;
  }>;
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { serviceSlug } = await params;
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
              Fill out the form to request your "{service.name}" service.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Quick & Simple</h3>
                        <p className="text-sm text-muted-foreground">Just provide your details and we'll contact you to schedule the service.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Phone className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">We'll Call You</h3>
                        <p className="text-sm text-muted-foreground">Our team will reach out to confirm the details and schedule your service.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Instant Contact</h3>
                        <p className="text-sm text-muted-foreground">After submitting, you can reach us directly via WhatsApp or call.</p>
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
