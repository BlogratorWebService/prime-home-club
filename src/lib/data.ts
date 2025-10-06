import { Wrench, Zap, Wind, Sparkles, type LucideIcon } from "lucide-react";

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
};

export type User = {
    isLoggedIn: boolean;
    isMember: boolean;
    name?: string;
    email?: string;
}

export const mockUser: User = {
    isLoggedIn: true,
    isMember: false,
    name: "Alex Doe",
    email: "alex.doe@example.com"
}

export const mockMember: User = {
    isLoggedIn: true,
    isMember: true,
    name: "Jordan Smith",
    email: "jordan.smith@example.com"
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cat-1",
    name: "Plumbing",
    slug: "plumbing",
    description: "Expert solutions for all your pipe and water flow needs.",
    icon: Wrench,
    imageId: "category-plumbing"
  },
  {
    id: "cat-2",
    name: "Electrical",
    slug: "electrical",
    description: "Safe and reliable wiring, installations, and repairs.",
    icon: Zap,
    imageId: "category-electrical"
  },
  {
    id: "cat-3",
    name: "HVAC",
    slug: "hvac",
    description: "Keep your home comfortable year-round with our HVAC services.",
    icon: Wind,
    imageId: "category-hvac"
  },
  {
    id: "cat-4",
    name: "Cleaning",
    slug: "cleaning",
    description: "Professional cleaning services for a sparkling home.",
    icon: Sparkles,
    imageId: "category-cleaning"
  },
];

export const services: Service[] = [
  // Plumbing
  {
    id: "serv-1",
    name: "Leak Repair",
    slug: "leak-repair",
    categoryId: "cat-1",
    description: "Fixing dripping faucets, leaking pipes, and other water wastage issues promptly.",
    details: [
      "Identify source of leak",
      "Repair or replace faulty components (pipes, gaskets, etc.)",
      "Test for successful resolution of the leak",
      "Cleanup of the work area",
    ],
    standardPrice: 150,
    memberPrice: 120,
  },
  {
    id: "serv-2",
    name: "Clogged Drain Cleaning",
    slug: "clogged-drain-cleaning",
    categoryId: "cat-1",
    description: "Professional clearing of clogged sinks, showers, and main sewer lines.",
    details: [
      "Assessment of clog severity",
      "Use of professional-grade auger (snake) or hydro-jetting",
      "Camera inspection for main line clogs (optional add-on)",
      "Guaranteed drain flow post-service",
    ],
    standardPrice: 200,
    memberPrice: 160,
  },
  // Electrical
  {
    id: "serv-3",
    name: "Outlet Installation & Repair",
    slug: "outlet-installation-repair",
    categoryId: "cat-2",
    description: "Install new electrical outlets or repair existing ones that are faulty.",
    details: [
      "Safe disconnection of power",
      "Installation of new GFCI or standard outlet box",
      "Wiring and grounding check",
      "Testing for proper voltage and safety",
    ],
    standardPrice: 125,
    memberPrice: 100,
  },
  {
    id: "serv-4",
    name: "Light Fixture Installation",
    slug: "light-fixture-installation",
    categoryId: "cat-2",
    description: "Replace old light fixtures or install new ones, including ceiling fans.",
    details: [
      "Assembly of new fixture",
      "Secure mounting to ceiling or wall",
      "Wiring connection and safety check",
      "Installation of bulbs and final test",
    ],
    standardPrice: 180,
    memberPrice: 145,
  },
  // HVAC
  {
    id: "serv-5",
    name: "AC Tune-Up",
    slug: "ac-tune-up",
    categoryId: "cat-3",
    description: "Annual maintenance to ensure your AC runs efficiently through the summer.",
    details: [
      "21-point inspection checklist",
      "Cleaning of coils and fins",
      "Refrigerant level check",
      "Thermostat calibration and testing",
    ],
    standardPrice: 130,
    memberPrice: 99,
  },
  {
    id: "serv-6",
    name: "Furnace Tune-Up",
    slug: "furnace-tune-up",
    categoryId: "cat-3",
    description: "Ensure your furnace is safe and ready for the winter with our comprehensive check.",
    details: [
      "Inspection of heat exchanger",
      "Cleaning of burners",
      "Carbon monoxide leak test",
      "Blower motor and ignition system check",
    ],
    standardPrice: 130,
    memberPrice: 99,
  },
    // Cleaning
  {
    id: "serv-7",
    name: "Deep House Cleaning",
    slug: "deep-house-cleaning",
    categoryId: "cat-4",
    description: "A thorough, top-to-bottom cleaning of your entire home.",
    details: [
      "Kitchen cleaning (appliances, counters, floors)",
      "Bathroom sanitation (showers, toilets, sinks)",
      "Dusting all surfaces, including baseboards and fixtures",
      "Vacuuming and mopping of all floors",
    ],
    standardPrice: 350,
    memberPrice: 280,
  },
  {
    id: "serv-8",
    name: "Window Washing",
    slug: "window-washing",
    categoryId: "cat-4",
    description: "Interior and exterior window washing for a streak-free shine.",
    details: [
      "Cleaning of all glass surfaces",
      "Wiping down of window sills and frames",
      "Screen cleaning (optional add-on)",
      "Use of professional, eco-friendly cleaning solutions",
    ],
    standardPrice: 175,
    memberPrice: 140,
  },
];
