import {
  ArrowRight,
  CalendarCheck,
  CreditCard,
  Mail,
  Ticket,
  UserPlus,
} from "lucide-react";

import { Card } from "@/components/ui/card";

export default function Process() {
  const steps = [
    // {
    //   icon: <UserPlus className="h-6 w-6" />,
    //   title: "Create Account",
    //   description: "Sign up with your email and personal details.",
    // },
    {
      icon: <Ticket className="h-6 w-6" />,
      title: "Select Ticket",
      description: "Choose the ticket type that suits your needs.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment",
      description: "Securely pay for your selected ticket.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Confirmation",
      description: "Receive a confirmation email with your ticket details.",
    },
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Event Day",
      description: "Attend the event and enjoy your experience!",
    },
  ];

  return (
    <div className="py-12 px-4 bg-white ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 underline underline-offset-4 decoration-blue-400">
          Registration Process
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 bg-background flex flex-col items-center text-center relative"
            >
              <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary h-6 w-6 hidden md:block" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
