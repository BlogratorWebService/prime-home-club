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
    description: "Prime Home Club provides professional TV repair services for all TV types including LED, OLED, QLED, and Smart TVs in Mumbai.",
    icon: Tv,
    imageId: "category-tv"
  },
  {
    id: "cat-2",
    name: "AC Repair",
    slug: "ac-repair",
    description: "Prime Home Club delivers professional air conditioning repair and maintenance services for all brands in Mumbai.",
    icon: AirVent,
    imageId: "category-ac"
  },
  {
    id: "cat-3",
    name: "Washing Machine",
    slug: "washing-machine-repair",
    description: "Prime Home Club offers reliable washing machine repair services for all types and brands in Mumbai.",
    icon: WashingMachine,
    imageId: "category-washing-machine"
  },
  {
    id: "cat-4",
    name: "Refrigerator Repair",
    slug: "refrigerator-repair",
    description: "Prime Home Club provides professional refrigerator repair services with certified technicians in Mumbai.",
    icon: Refrigerator,
    imageId: "category-refrigerator"
  },
  {
    id: "cat-5",
    name: "Geyser Repair",
    slug: "geyser-repair",
    description: "Prime Home Club delivers professional geyser and water heater repair services in Mumbai.",
    icon: Heater,
    imageId: "category-geyser"
  },
];

export const services: Service[] = [
  // TV Repair
  {
    id: "serv-1",
    name: "Prime Home Club LED TV Screen Replacement",
    slug: "screen-replacement",
    categoryId: "cat-1",
    description: "Prime Home Club offers professional LED, OLED, and QLED TV screen replacement services with genuine spare parts at your home in Mumbai.",
    details: [
      "Prime Home Club sources compatible genuine screens",
      "Safe removal of damaged screen by certified technicians",
      "Professional installation of new screen",
      "Prime Home Club performs comprehensive testing",
      "Warranty coverage on replacement parts"
    ],
    standardPrice: 2000,
    memberPrice: 1600,
    imageId: "tv.jpeg"
  },
  {
    id: "serv-2",
    name: "Prime Home Club TV Motherboard Repair",
    slug: "motherboard-repair",
    categoryId: "cat-1",
    description: "Prime Home Club provides expert TV motherboard repair services for power issues, display problems, and board-level repairs in Mumbai.",
    details: [
      "Prime Home Club certified technician diagnostics",
      "Component-level repair with genuine parts",
      "Prime Home Club motherboard replacement when needed",
      "Firmware and software updates",
      "Comprehensive functionality testing",
      "Service warranty included"
    ],
    standardPrice: 1500,
    memberPrice: 1200,
    imageId: "tv.jpeg"
  },
  // AC Repair
  {
    id: "serv-3",
    name: "Prime Home Club AC Gas Refill",
    slug: "ac-gas-refill",
    categoryId: "cat-2",
    description: "Prime Home Club provides professional AC refrigerant recharging services to restore cooling performance in Mumbai.",
    details: [
      "Prime Home Club technician leak detection test",
      "Safe evacuation of old refrigerant",
      "Prime Home Club recharges with correct refrigerant type",
      "Cooling efficiency verification",
      "Service warranty included"
    ],
    standardPrice: 2500,
    memberPrice: 2000,
    imageId: "ac.jpg"
  },
  {
    id: "serv-4",
    name: "Prime Home Club AC Service",
    slug: "ac-general-service",
    categoryId: "cat-2",
    description: "Prime Home Club offers comprehensive air conditioner cleaning and maintenance services at your home in Mumbai.",
    details: [
      "Prime Home Club deep cleaning of indoor and outdoor units",
      "Filter cleaning and inspection",
      "Drain pipe cleaning and maintenance",
      "Performance and safety assessment",
      "Cooling efficiency check"
    ],
    standardPrice: 500,
    memberPrice: 400,
    imageId: "ac.jpg"
  },
  // Washing Machine
  {
    id: "serv-5",
    name: "Prime Home Club Washing Machine Drum Repair",
    slug: "drum-bearing-repair",
    categoryId: "cat-3",
    description: "Prime Home Club provides expert washing machine drum and bearing repair services for noisy or non-rotating drums in Mumbai.",
    details: [
      "Prime Home Club diagnosis of drum or bearing issues",
      "Genuine bearing or drum assembly replacement",
      "Seal replacement by certified technicians",
      "Comprehensive testing for smooth operation",
      "Service warranty coverage"
    ],
    standardPrice: 1800,
    memberPrice: 1450,
    imageId: "washing-machine.png"
  },
    // Refrigerator
  {
    id: "serv-6",
    name: "Prime Home Club Refrigerator Compressor Repair",
    slug: "compressor-repair",
    categoryId: "cat-4",
    description: "Prime Home Club delivers professional refrigerator compressor repair and replacement services in Mumbai.",
    details: [
      "Prime Home Club compressor diagnostics",
      "Relay and overload protector inspection",
      "Prime Home Club compressor replacement with genuine parts",
      "Refrigerant refill and cooling verification",
      "Service warranty included"
    ],
    standardPrice: 2500,
    memberPrice: 2000,
    imageId: "refr.jpg"
  },
  // Geyser
  {
    id: "serv-7",
    name: "Prime Home Club Geyser Heating Element Replacement",
    slug: "heating-element-replacement",
    categoryId: "cat-5",
    description: "Prime Home Club provides professional geyser heating element replacement services for efficient water heating in Mumbai.",
    details: [
      "Prime Home Club testing of existing heating element",
      "Safe draining of geyser tank",
      "Installation of genuine heating element",
      "Comprehensive heating and safety testing",
      "Service warranty coverage"
    ],
    standardPrice: 800,
    memberPrice: 650,
    imageId: "geyser.jpg"
  },
];
