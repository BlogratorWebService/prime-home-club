import { Tv, AirVent, WashingMachine, Refrigerator, Heater, type LucideIcon } from "lucide-react";

export type ServiceCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  imageId: string;
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  details: string[];
  standardPrice: number;
  memberPrice: number;
  imageId?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cat-1",
    name: "TV Repair",
    slug: "tv-repair",
    description: "Expert repairs for all TV types including LED, OLED, and Smart TVs.",
    icon: Tv,
    imageId: "category-tv"
  },
  {
    id: "cat-2",
    name: "AC Repair",
    slug: "ac-repair",
    description: "Professional air conditioning repair and maintenance for all brands.",
    icon: AirVent,
    imageId: "category-ac"
  },
  {
    id: "cat-3",
    name: "Washing Machine",
    slug: "washing-machine-repair",
    description: "Reliable repairs for all washing machine types and brands.",
    icon: WashingMachine,
    imageId: "category-washing-machine"
  },
  {
    id: "cat-4",
    name: "Refrigerator Repair",
    slug: "refrigerator-repair",
    description: "Expert repairs for all refrigerator types with quick response.",
    icon: Refrigerator,
    imageId: "category-refrigerator"
  },
  {
    id: "cat-5",
    name: "Geyser Repair",
    slug: "geyser-repair",
    description: "Professional water heater repair and maintenance services.",
    icon: Heater,
    imageId: "category-geyser"
  },
];

export const services: Service[] = [
  // TV Repair
  {
    id: "serv-1",
    name: "Screen Replacement",
    slug: "screen-replacement",
    categoryId: "cat-1",
    description: "Professional screen replacement for cracked or damaged TV screens.",
    details: [
      "Sourcing of compatible screen",
      "Safe removal of damaged screen",
      "Installation of new screen",
      "Testing for full functionality",
    ],
    standardPrice: 2000,
    memberPrice: 1600,
    imageId: "tv.jpeg"
  },
  {
    id: "serv-2",
    name: "Motherboard Repair",
    slug: "motherboard-repair",
    categoryId: "cat-1",
    description: "Expert repair of TV motherboards for power and display issues.",
    details: [
      "Diagnostics of motherboard",
      "Component-level repair or full replacement",
      "Firmware updates if required",
      "Comprehensive testing",
    ],
    standardPrice: 1500,
    memberPrice: 1200,
    imageId: "tv.jpeg"
  },
  // AC Repair
  {
    id: "serv-3",
    name: "AC Gas Refill",
    slug: "ac-gas-refill",
    categoryId: "cat-2",
    description: "Recharging AC refrigerant to restore cooling performance.",
    details: [
      "Leak detection test",
      "Evacuation of old refrigerant",
      "Recharging with correct type and amount of gas",
      "Cooling efficiency test",
    ],
    standardPrice: 2500,
    memberPrice: 2000,
    imageId: "ac.jpg"
  },
  {
    id: "serv-4",
    name: "AC General Service",
    slug: "ac-general-service",
    categoryId: "cat-2",
    description: "Comprehensive cleaning and maintenance for your air conditioner.",
    details: [
      "Indoor and outdoor unit cleaning",
      "Filter cleaning and replacement check",
      "Drain pipe cleaning",
      "Performance and safety check",
    ],
    standardPrice: 500,
    memberPrice: 400,
    imageId: "ac.jpg"
  },
  // Washing Machine
  {
    id: "serv-5",
    name: "Drum or Bearing Repair",
    slug: "drum-bearing-repair",
    categoryId: "cat-3",
    description: "Fixing noisy or non-rotating drums in washing machines.",
    details: [
      "Diagnosis of drum or bearing issue",
      "Replacement of faulty bearings or drum assembly",
      "Seal replacement to prevent leaks",
      "Testing for smooth and quiet operation",
    ],
    standardPrice: 1800,
    memberPrice: 1450,
    imageId: "washing-machine.png"
  },
    // Refrigerator
  {
    id: "serv-6",
    name: "Compressor Repair",
    slug: "compressor-repair",
    categoryId: "cat-4",
    description: "Repair or replacement of faulty refrigerator compressors.",
    details: [
      "Compressor diagnostics",
      "Relay and overload protector check",
      "Compressor replacement if needed",
      "Gas refill and cooling test",
    ],
    standardPrice: 2500,
    memberPrice: 2000,
    imageId: "refr.jpg"
  },
  // Geyser
  {
    id: "serv-7",
    name: "Heating Element Replacement",
    slug: "heating-element-replacement",
    categoryId: "cat-5",
    description: "Replacement of burnt-out or inefficient geyser heating elements.",
    details: [
      "Testing of existing heating element",
      "Draining the geyser tank",
      "Installation of a new heating element",
      "Testing for proper heating and safety",
    ],
    standardPrice: 800,
    memberPrice: 650,
    imageId: "geyser.jpg"
  },
];
