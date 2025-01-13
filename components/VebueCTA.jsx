"use client";

import { useState } from "react";
import { Calendar, Home, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function VenueCTA() {
  return (
    <div className="bg-white min-h-full flex items-center justify-center py-12">
      <Card className="w-full max-w-7xl overflow-hidden p-0 shadow-2xl rounded-3xl border-none relative drop-shadow-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1555952238-7d76782b45f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10" />
        <div className="relative z-20 text-white p-8 lg:p-12">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-4xl font-bold mb-2">
            2<sup>nd</sup> ICEMSS Conference Venue
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div className="grid gap-4 md:grid-cols-1 max-w-md">
              <div className="flex items-center gap-2 bg-black bg-opacity-30 p-3 rounded-lg">
                <MapPin className="text-primary" />
                <span className="font-medium">Indraprastha College For Women–Delhi University (ICW–DU),Delhi, India</span>
              </div>
              
              <div className="flex items-center gap-2 bg-black bg-opacity-30 p-3 rounded-lg">
                <Home className="text-primary" />
                <span className="font-medium">31, Sham Nath Marg, Civil Lines, New Delhi, Delhi, 110054, India</span>
              </div>
              <div className="flex items-center gap-2 bg-black bg-opacity-30 p-3 rounded-lg">
                <Calendar className="text-primary" />
                <span className="font-medium">February 19th - 20th, 2025</span>
              </div>
            </div>
            <p className="text-base leading-relaxed">
              Experience the future of sustainable conferences at our
              state-of-the-art Eco Conference Center. Powered by 100%
              renewable energy and featuring cutting-edge blue architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href={'/venue'}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/90"
                >
                  Explore Venue
                </Button>
              </Link>
              <Link href={'/registration'}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

