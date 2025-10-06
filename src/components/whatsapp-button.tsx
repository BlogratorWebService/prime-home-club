"use client";

import { Button } from "./ui/button";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="32px"
    height="32px"
  >
    <path
      fill="#fff"
      d="M39.2,8.8c-4.4-4.4-10.2-6.8-16.2-6.8c-12.7,0-23,10.3-23,23c0,4.1,1.1,8,3.1,11.4l-3.3,12l12.3-3.2 c3.2,1.8,6.8,2.8,10.8,2.8h0.1c12.7,0,23-10.3,23-23C46,19,43.6,13.2,39.2,8.8z"
    />
    <path
      fill="#4caf50"
      d="M23,39.5c-3.6,0-7.1-0.9-10.1-2.7l-1.1-0.7l-7.5,2l2-7.3l-0.7-1.1C3.9,26.8,3,23,3,19 c0-11,9-20,20-20c5.4,0,10.4,2.1,14.1,5.9C41,8.6,43,13.6,43,19C43,30,34,39.5,23,39.5z"
    />
    <path
      fill="#fff"
      d="M32.5,25.5c-0.2-0.2-0.5-0.4-1-0.7c-0.5-0.2-3-1.5-3.4-1.6c-0.4-0.2-0.8-0.2-1.1,0.2 c-0.3,0.5-1.3,1.6-1.6,2c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2.1-0.8-4-2.5c-1.5-1.3-2.5-2.9-2.8-3.4c-0.3-0.5-0.1-0.8,0.2-1.1 c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.2,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6-0.1-0.8c-0.2-0.2-1.1-2.7-1.5-3.7c-0.4-1-0.8-0.8-1.1-0.8 c-0.3,0-0.6,0-1,0c-0.3,0-0.8,0.1-1.3,0.6c-0.5,0.5-1.8,1.8-1.8,4.3c0,2.5,1.9,5,2.1,5.3c0.3,0.3,3.6,5.5,8.8,7.7 c1.2,0.5,2.2,0.8,3,1.1c1.2,0.4,2.2,0.3,3.1-0.2c0.9-0.5,2.7-2.2,3.1-2.9c0.4-0.7,0.4-1.3,0.3-1.6 C33,25.9,32.7,25.7,32.5,25.5z"
    />
  </svg>
);


export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918858585559"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600"
      >
        <WhatsAppIcon />
      </Button>
    </a>
  );
}