"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { toast } from "react-toastify";
import { useCustomToast } from "@/hooks/useCustomToast";

export default function ContactUs() {
  const { showSuccessToast, showErrorToast } = useCustomToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      showSuccessToast("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (error) {
      showErrorToast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen   text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-primary mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="https://illustrations.popsy.co/blue/telephone-call.svg"
              alt="Contact Us"
              width={400}
              height={300}
              className=""
            />
            <div>
              <h1 className="text-3xl font-semibold  mb-4 underline underline-offset-4 decoration-blue-500">
                Get in Touch
              </h1>
              <p className="text-muted-foreground mb-4">
                We love to hear from you. Whether you have a question about our
                services, pricing, or anything else, our team is ready to answer
                all your questions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 text-primary" />
                  <span>info@icemss.in</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-primary" />
                  <span>+91 82600 80050</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  <span>Flat No: 202 Plot.no.2028/2044, Sai Aarti Enclave, Behind Tanishq Chandasekharpur, Bhubaneshwar, India</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Zep-Research/61561809783777/" className="text-primary hover:text-primary/80">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/zepresearch/" className="text-primary hover:text-primary/80">
                  <Instagram size={24} />
                </a>
                {/* <a href="https://x.com/i/flow/login?redirect_after_login=%2FZepresearch#" className="text-primary hover:text-primary/80">
                  <Twitter size={24} />
                </a> */}
                <a href="https://www.linkedin.com/company/zep-research/" className="text-primary hover:text-primary/80">
                  < Linkedin size={24} />
                </a>
                <a href="https://www.youtube.com/@Zepresearch" className="text-primary hover:text-primary/80">
                  < Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white h-fit p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Phone no.
                </label>
               
                <PhoneInput 
                     id="number"
                      name="number"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handlePhoneChange}/>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Country
                </label>
                <Input
                  id="country"
                  type="text"
                  placeholder="India"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
