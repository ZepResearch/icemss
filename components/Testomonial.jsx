import { Card } from "@/components/ui/card";
import { Star, Award } from 'lucide-react';
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              Leading Conference on Engineering, Management and Social Sciences
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 "
                  />
                ))}
            </div>
            <div className="text-sm">
              <span className="font-medium">4.9</span>
              <span className="text-gray-500"> (300+ reviews)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="relative overflow-hidden border-blue-100 p-6"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rotate-12 animate-pulse bg-primary" />
              <blockquote className="relative space-y-4 flex flex-col justify-between h-full">
                <div className="text-lg font-medium leading-relaxed text-gray-700 h-full">
                  &quot;{testimonial.quote}&quot;
                </div>
                <footer className="flex items-center gap-4 h-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I had wonderful experience with Zep Research during the recent conference in Kuala Lumpur, Malaysia. The staff is soo cooperative and helpful. I had an amazing time and great learning      experience with them.	",
    name: "Dr. Aishwarya Singh",
    title: "Professor of Engineering, Stanford University",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "A well-organised and insightful conference that delivered valuable takeaways in every session.	",
    name: " fujie ibrahim",
    title: "Head of Management Studies, MIT",
    avatar: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The World Conference on Climate Change and Environmental Sustainability in Kuala Lumpur was a wonderful experience for me, and I benefited greatly from it.",
    name: "Nourdeen82 SN",
    title: "Research Director, Social Innovation Institute",
    avatar: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

