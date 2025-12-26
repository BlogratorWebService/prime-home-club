
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Tv, Wrench, Clock, Users, ThumbsUp, Check, Settings, MessageSquare, Briefcase } from "lucide-react";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const leadSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().min(10, "Please enter a valid phone number."),
    issue: z.string().min(10, "Please describe the issue in a bit more detail."),
    tvBrand: z.string().optional(),
});

type LeadFormInputs = z.infer<typeof leadSchema>;

function LeadForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadFormInputs>({
        resolver: zodResolver(leadSchema),
    });
    const { toast } = useToast();

    const onSubmit: SubmitHandler<LeadFormInputs> = async (data) => {
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong.");
            }

            toast({
                title: "Quote Request Sent!",
                description: "We've received your request and will contact you shortly.",
            });
            reset();

        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: error.message || "Could not submit your request. Please try again.",
            });
        }
    };

    return (
        <Card id="lead-form" className="w-full max-w-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Get a Free Quote</CardTitle>
                <CardDescription>Fill out the form and our expert will call you back in minutes.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" {...register("name")} placeholder="Your Name" />
                        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" {...register("phone")} placeholder="Your Phone Number" />
                        {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tvBrand">TV Brand (Optional)</Label>
                        <Input id="tvBrand" {...register("tvBrand")} placeholder="e.g., Samsung, LG, Sony" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="issue">Describe the Issue</Label>
                        <Textarea id="issue" {...register("issue")} placeholder="e.g., TV not turning on, lines on screen..." />
                        {errors.issue && <p className="text-destructive text-sm">{errors.issue.message}</p>}
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default function Home() {
    const services = [
        { icon: <Tv className="h-8 w-8" />, title: "All TV Brands", description: "Samsung, LG, Sony, & more." },
        { icon: <Settings className="h-8 w-8" />, title: "All TV Types", description: "LED, OLED, QLED, 4K, Smart TV." },
        { icon: <Wrench className="h-8 w-8" />, title: "All Issues Fixed", description: "No power, screen issues, sound problems." },
        { icon: <Briefcase className="h-8 w-8" />, title: "In-Home Service", description: "We come to you, same-day repairs." },
    ];

    const benefits = [
        { icon: <Users className="h-10 w-10 text-primary" />, title: "Expert Technicians", description: "Certified professionals with years of experience in TV electronics." },
        { icon: <Clock className="h-10 w-10 text-primary" />, title: "Fast, Same-Day Service", description: "We offer quick turnaround to get your entertainment back on track." },
        { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "3-Month Warranty", description: "We stand by our work with a warranty on all repairs and parts." },
        { icon: <ThumbsUp className="h-10 w-10 text-primary" />, title: "Transparent Pricing", description: "Get a clear, upfront quote before any work begins. No hidden fees." },
    ];

    const faqs = [
        {
            question: "Which TV brands do you repair?",
            answer: "We repair all major TV brands, including Samsung, LG, Sony, Panasonic, TCL, Hisense, and many more. Our technicians are trained to handle the specifics of each manufacturer."
        },
        {
            question: "How long does a repair usually take?",
            answer: "Most common repairs, like motherboard or power supply issues, can be completed at your home within 1-2 hours. For more complex issues like screen replacement, it may take longer, but we aim for same-day or next-day service."
        },
        {
            question: "Do you offer a warranty on your repairs?",
            answer: "Yes! We are confident in our work. All our repairs come with a 3-month warranty on the parts replaced and the labor performed."
        },
        {
            question: "Is the inspection or visit charge adjustable?",
            answer: "Absolutely. The initial inspection fee is fully adjusted into the final repair bill if you decide to proceed with the repair. If you choose not to repair, a nominal inspection charge applies."
        }
    ];

    const testimonials = [
        { name: "Anjali S.", comment: "My Samsung TV had vertical lines on the screen. The technician from Custom TV Repair fixed it the same day at my home. Very professional and affordable!", stars: 5 },
        { name: "Vikram Mehta", comment: "The backlight on my LG LED TV went out. They gave me a quote over the phone and stuck to it. Excellent service and very knowledgeable team.", stars: 5 },
        { name: "Priya Rao", comment: "Fastest TV repair I've ever experienced. My Sony TV wouldn't turn on, and they had it working within an hour. Highly recommend their services.", stars: 5 }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-card dots-pattern">
                    <div className="container mx-auto px-4 py-16 md:py-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-fade-in-up">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-primary">
                                    Expert TV Repair At Your Doorstep.
                                </h1>
                                <p className="mt-6 text-lg md:text-xl max-w-xl text-muted-foreground">
                                    Don't let a broken TV ruin your day. We fix all brands, all models, with a service warranty. Get a free quote now!
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg">
                                        <Link href="#lead-form">Get a Free Quote <ArrowRight className="ml-2" /></Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline">
                                        <a href="tel:8858585559">Call Us Now</a>
                                    </Button>
                                </div>
                            </div>
                            <div className="animate-fade-in-up animation-delay-300">
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Bar */}
                <section className="py-12 bg-background border-y">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {services.map(service => (
                                <div key={service.title} className="flex flex-col items-center gap-2">
                                    <div className="text-primary">{service.icon}</div>
                                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section id="why-us" className="py-16 md:py-24 bg-card">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Custom TV Repair?</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We are Mumbai's trusted choice for fast, reliable, and affordable TV repair services.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {benefits.map((benefit, index) => (
                                <div key={benefit.title} className="text-center flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-headline text-xl font-semibold">{benefit.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Customers Say</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                We've helped hundreds of customers in Mumbai get their TVs back in action.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="bg-card animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-0.5 mb-4">
                                            {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                        <p className="text-muted-foreground">"{testimonial.comment}"</p>
                                        <p className="font-semibold text-right mt-4">- {testimonial.name}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 md:py-24 bg-card">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full mt-12">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>
        </div>
    );
}
