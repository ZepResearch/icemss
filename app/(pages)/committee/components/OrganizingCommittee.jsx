"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { committeeService } from "@/lib/pocketbase";

export default function OrganizingCommittee() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadSpeakers = async () => {
      try {
        // Check if we already have cached data
        if (speakers.length > 0) {
          setLoading(false);
          return;
        }

        const data = await committeeService.getAll();
        if (mounted) {
          setSpeakers(data);
          // Cache the data in sessionStorage
          sessionStorage.setItem('committeeData', JSON.stringify(data));
        }
      } catch (error) {
        console.error("Failed to load committee members:", error);
        // Try to get data from cache if fetch fails
        const cachedData = sessionStorage.getItem('committeeData');
        if (cachedData) {
          setSpeakers(JSON.parse(cachedData));
        } else {
          setError("Failed to load committee members. Please try again later.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    // Try to load from sessionStorage first
    const cachedData = sessionStorage.getItem('committeeData');
    if (cachedData) {
      setSpeakers(JSON.parse(cachedData));
      setLoading(false);
    } else {
      loadSpeakers();
    }

    return () => {
      mounted = false;
    };
  }, []);
  if (loading) {
    return (
      <div className="bg-secondary py-12 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Loading...
          </h2>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-secondary py-12 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {error}
          </h2>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-secondary py-12 pt-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Organizing Committee
          </h2>
        </motion.div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {speakers.map((speaker, index) => (
            <motion.li
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card">
                <CardContent className="pt-6">
                  <Avatar className="mx-auto h-56 w-56">
                    <AvatarImage src={`http://${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${speaker.collectionId}/${speaker.id}/${speaker.img}`} alt={speaker.name} />
                    <AvatarFallback>
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-primary">
                    {speaker.name}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {speaker.designation}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {speaker.details}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {speaker.country}
                  </p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}