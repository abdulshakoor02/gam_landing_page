"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ShimmerButton } from "./ui/shimmer-button";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> // Select is handled by onValueChange
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceType: value });
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    // Basic phone validation (e.g., at least 10 digits) could be added
    // else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
    //   newErrors.phone = "Phone number seems invalid.";
    // }
    if (!formData.serviceType) newErrors.serviceType = "Service type is required.";
    // Message is optional

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setIsSubmitted(false);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data submitted:", formData);
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" }); // Clear form
    setErrors({});

    // Hide success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const serviceTypes = [
    "Skilled Worker Programs",
    "Family Reunification",
    "Business Immigration",
    "Student Visas",
    "Refugee & Asylum Cases",
    "Citizenship Applications",
    "Other",
  ];

  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-lg shadow-2xl bg-white/30 backdrop-blur-lg border border-white/20", // Glass-morphism effect
        "max-w-md w-full", // Responsive width
        className
      )}
    >
      <h2 className="text-2xl font-bold text-dark-charcoal dark:text-clean-white mb-6 text-center">
        Get Free Consultation
      </h2>
      {isSubmitted && (
        <div className="mb-4 p-3 rounded-md bg-emerald-green/80 text-clean-white text-center">
          Thank you! Your consultation request has been sent successfully. We will be in touch shortly.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-dark-charcoal dark:text-light-gray-text">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="mt-1"
          />
          {errors.name && <p className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-dark-charcoal dark:text-light-gray-text">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="mt-1"
          />
          {errors.email && <p className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="phone" className="text-dark-charcoal dark:text-light-gray-text">Phone</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
            className="mt-1"
          />
          {errors.phone && <p className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.phone}</p>}
        </div>
        <div>
          <Label htmlFor="serviceType" className="text-dark-charcoal dark:text-light-gray-text">Service Type</Label>
          <Select
            name="serviceType"
            value={formData.serviceType}
            onValueChange={handleSelectChange} // Use dedicated handler
          >
            <SelectTrigger id="serviceType" className="w-full mt-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="text-sm text-red-500 dark:text-red-400 mt-1">{errors.serviceType}</p>}
        </div>
        <div>
          <Label htmlFor="message" className="text-dark-charcoal dark:text-light-gray-text">Message</Label>
          <Textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="mt-1"
          />
        </div>
        <div>
          <ShimmerButton
            type="submit"
            className="w-full text-md font-semibold"
            background="bg-professional-teal hover:bg-deep-navy-blue"
            shimmerColor="#F59E0B"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Submitting..." : "Get Free Consultation"}
          </ShimmerButton>
        </div>
      </form>
    </div>
  );
}
