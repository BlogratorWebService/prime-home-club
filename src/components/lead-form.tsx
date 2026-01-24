"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  brand: z.string().min(2, "Please enter the appliance brand."),
  issue: z.string().min(5, "Please describe the issue."),
});

export default function LeadForm() {
  const router = useRouter();
  const { toast } = useToast();

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    brand: "",
    issue: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validationResult = leadFormSchema.safeParse(formState);
    if (!validationResult.success) {
      const newErrors: { [key: string]: string } = {};
      validationResult.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setFormState({ name: "", phone: "", brand: "", issue: "" });
      router.push("/thank-you");

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Could not submit your request. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get a Free Quote</CardTitle>
        <CardDescription>Fill out the form for a no-obligation quote.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLeadSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" value={formState.name} onChange={handleFormChange} />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" placeholder="Enter your phone number" value={formState.phone} onChange={handleFormChange} />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="brand">Appliance Brand</Label>
            <Input id="brand" name="brand" placeholder="e.g., Samsung, LG, Whirlpool" value={formState.brand} onChange={handleFormChange} />
            {errors.brand && <p className="text-destructive text-sm mt-1">{errors.brand}</p>}
          </div>
          <div>
            <Label htmlFor="issue">Describe the Issue</Label>
            <Textarea id="issue" name="issue" placeholder="e.g., TV screen is blank, AC is not cooling" value={formState.issue} onChange={handleFormChange} />
            {errors.issue && <p className="text-destructive text-sm mt-1">{errors.issue}</p>}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Get My Free Quote"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
