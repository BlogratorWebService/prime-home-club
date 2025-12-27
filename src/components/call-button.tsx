
"use client";

import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+918858585559"
      className="fixed bottom-6 left-6 z-50 p-3 bg-primary text-primary-foreground rounded-lg hover:scale-110 transition-transform duration-300 drop-shadow-lg"
      aria-label="Call Us"
    >
      <Phone className="w-10 h-10" />
    </a>
  );
}
