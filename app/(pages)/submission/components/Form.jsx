"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Cloudinary } from "@cloudinary/url-gen";
// import "react-toastify/dist/ReactToastify.css";/
// import "@/styles/toast.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-toastify";
import { useCustomToast } from "@/hooks/useCustomToast";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const cld = new Cloudinary({
  cloud: {
    cloudName: "dwlhesiyi",
  },
});

const CLOUDINARY_UPLOAD_PRESET = "ml_default";
const CLOUDINARY_CLOUD_NAME = "dwlhesiyi";

export default function SubmitForm() {
  const { showSuccessToast, showErrorToast } = useCustomToast();
  const [formData, setFormData] = useState({
    authorName: "",
    number: "",
    email: "",
    country: "",
    coAuthorName: "",
    paperTitle: "",
    department: "",
    universityOrganization: "",
    paperType: "",
    presentationType: "",
    message: "",
    conferenceSource: "",
    pdfUrl: "",
  });

  const [pdfFile, setPdfFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, number: value });
  };
  const onDrop = (acceptedFiles) => {
    setPdfFile(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] ,'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],},
    multiple: false,
  });

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      // console.log("Cloudinary response:", data);
      return data.secure_url;
    } catch (error) {
      //  console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let pdfUrl = "";
      if (pdfFile) {
        pdfUrl = await uploadToCloudinary(pdfFile);
      }

      const dataToSubmit = {
        ...formData,
        pdfUrl: pdfUrl,
      };

      const response = await fetch("/api/paper-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit paper");
      }

      const result = await response.json();

      // Reset form
      setFormData({
        authorName: "",
        number: "",
        email: "",
        country: "",
        coAuthorName: "",
        paperTitle: "",
        department: "",
        universityOrganization: "",
        paperType: "",
        presentationType: "",
        message: "",
        conferenceSource: "",
        pdfUrl: "",
      });
      setPdfFile(null);

      // Custom styled toast notifications
      showSuccessToast("Paper submitted successfully! 🎉");
      showSuccessToast(
        "Our coordinator will contact you within 24-48 hours 📧",
        {
          autoClose: 6000, // Stays a bit longer
        }
      );
    } catch (error) {
      // console.error("Error submitting form:", error);
      showErrorToast(
        error.message || "Error submitting form. Please try again. ❌"
      );
    }
  };

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Paper Submission
            </h2>
            <p className="text-gray-600 mb-6">
              Get in touch with our team for personalized assistance and expert
              guidance.
            </p>
            <img
              src="https://illustrations.popsy.co/blue/paper-plane.svg"
              alt="Product screenshot"
              className=""
              width={400}
              height={400}
            />
          </div>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl underline underline-offset-2 decoration-blue-500">
                Submit Your Paper
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="authorName">Author Name</Label>
                    <Input
                      id="authorName"
                      name="authorName"
                      value={formData.authorName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number">Phone / Whatsapp.no</Label>
                    {/* <Input
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    /> */}
                    <PhoneInput 
                     id="number"
                      name="number"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Enter phone number"
                    value={formData.number}
                    onChange={handlePhoneChange}/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coAuthorName">Co-Author Name</Label>
                    <Input
                      id="coAuthorName"
                      name="coAuthorName"
                      value={formData.coAuthorName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paperTitle">Paper Title</Label>
                    <Input
                      id="paperTitle"
                      name="paperTitle"
                      value={formData.paperTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="universityOrganization">
                      University / Organization
                    </Label>
                    <Input
                      id="universityOrganization"
                      name="universityOrganization"
                      value={formData.universityOrganization}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Upload your paper</Label>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the PDF file here ...</p>
                    ) : (
                      <p>
                        Drag &apos;n&apos; drop a PDF file here, or click to
                        select one
                      </p>
                    )}
                  </div>
                  {pdfFile && (
                    <p className="text-sm font-medium">
                      Selected file:{" "}
                      <span className="font-normal underline">
                        {pdfFile.name}
                      </span>
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Paper Type</Label>
                  <RadioGroup
                    name="paperType"
                    value={formData.paperType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, paperType: value }))
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Abstract" id="abstract" />
                      <Label htmlFor="abstract">Abstract</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Full Paper" id="fullPaper" />
                      <Label htmlFor="fullPaper">Full Paper</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="presentationType">Presentation Type</Label>
                  <Select
                    name="presentationType"
                    value={formData.presentationType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        presentationType: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select presentation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Poster">Poster</SelectItem>
                      <SelectItem value="Oral">Oral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="conferenceSource">
                    How this conference came to be known to you
                  </Label>
                  <Select
                    name="conferenceSource"
                    value={formData.conferenceSource}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        conferenceSource: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference-alerts">
                        Conference Alerts
                      </SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="friend-colleague-supervisor">
                        Friend, Colleague or Supervisor
                      </SelectItem>
                      <SelectItem value="conference-alarm">
                        Conference Alarm
                      </SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="google-search">
                        Google Search
                      </SelectItem>
                      <SelectItem value="eventbrite">Eventbrite</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Submit Paper
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
