"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What topics will the conference cover?",
    answer: "The conference covers a wide range of topics, including advancements in engineering, strategic management practices, social impact research, interdisciplinary solutions, and sustainable development strategies.",
  },
  {
    question: "How can I register for ICEMSS?",
    answer: "You can register via the official conference website. Early-bird discounts are available for registrations made before the deadline, and group registrations receive special rates.",
  },
  {
    question: "Will there be virtual participation options?",
    answer: "Yes, ICEMSS offers a hybrid format. You can attend in person or participate virtually through live-streamed sessions and interactive online platforms.",
  },
  {
    question: "Are there awards for outstanding presentations or research papers?",
    answer: "Yes, ICEMSS recognizes outstanding contributions through categories like Best Paper Award, Best Presenter Award, and Young Researcher Award to celebrate excellence in research.",
  },
  {
    question: "What types of sessions and events can I expect?",
    answer: "The conference will feature keynote speeches, research paper presentations, panel discussions, workshops, poster sessions, and dedicated networking opportunities with experts.",
  },
  {
    question: "Is there an opportunity to publish my research?",
    answer: "Absolutely! Selected papers will be published in reputable conference proceedings and indexed journals, providing global visibility for your research.",
  },
  {
    question: "How do I prepare for my presentation?",
    answer: "Detailed presentation guidelines will be provided upon paper acceptance. You'll receive support and tips on structuring and delivering an impactful presentation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-whitehi">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight underline underline-offset-4 decoration-primary dark:text-blue-300">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-7  dark:text-blue-200">
              Can&apos;t find the answer you&apos;re looking for? Reach out to
              our{" "}
              <a
                href="#contact"
                className="font-semibold text-blue-800 hover:text-blue-700 underline"
              >
                conference support team
              </a>
              .
            </p>
            <Image
              src="https://illustrations.popsy.co/blue/question-mark.svg"
              alt="Climate Conference Illustration"
              width={300}
              height={300}
              className="mt-8 "
            />
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b  pb-6"
                >
                  <dt className="text-lg font-semibold leading-7 text-gray-950 dark:text-blue-200">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-start justify-between text-left"
                    >
                      <span>{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {openIndex === index ? (
                          <ChevronUp className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pr-12 text-base leading-7  dark:text-blue-300"
                    >
                      {faq.answer}
                    </motion.dd>
                  )}
                </motion.div>
              ))}
            </dl>
            <div className="flex flex-col justify-start p-4  items-start mt-10 border-l-2 border-t-2 max-w-2xl  ">
              <div className="space-y-4 text-sm font-semibold">
                <div className="flex items-end">
                  <Mail className="mr-2 text-blue-700" />
                  <span>info@icemss.in</span>
                </div>
                <div className="flex items-end">
                  <Phone className="mr-2 text-blue-700" />
                  <span>+91 82606 84845</span>
                </div>
                <div className="flex items-end ">
                  <MapPin className="mr-2  text-blue-700" />
                  <span>GOA
                  </span>
                </div>
              </div>
              <Link href={'/contact'}>
                <Button variant='outline' className='border-blue-300 mt-7'>
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}