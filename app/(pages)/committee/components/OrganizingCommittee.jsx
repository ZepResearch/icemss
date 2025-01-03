"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { pb } from "@/lib/pocketbase";

export default function OrganizingCommittee() {
  const [committee, setCommittee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchCommittee = async () => {
        try {
          const records = await pb.collection('committee').getFullList({
            sort: 'name',
            requestKey: null
          })
          setCommittee(records)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
  
      fetchCommittee()
    }, [])

    // Try to load from sessionStorage first
    
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
            Organizing Committees
          </h2>
        </motion.div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {committee.map((speaker, index) => (
            <motion.li
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card">
                <CardContent className="pt-6">
                  <Avatar className="mx-auto h-56 w-56">
                    <AvatarImage src={`http://${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${speaker.collectionId}/${speaker.id}/${speaker.img}`} alt={speaker.name} className='object-contain bg-blue-50'/>
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