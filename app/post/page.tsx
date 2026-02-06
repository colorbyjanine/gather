"use client";

import { useState } from "react";
import Link from "next/link";

const eventTypes = [
  { id: "wedding", icon: "💍", label: "Wedding" },
  { id: "corporate", icon: "💼", label: "Corporate" },
  { id: "birthday", icon: "🎂", label: "Birthday" },
  { id: "anniversary", icon: "❤️", label: "Anniversary" },
  { id: "holiday", icon: "🎄", label: "Holiday Party" },
  { id: "graduation", icon: "🎓", label: "Graduation" },
  { id: "babyshower", icon: "👶", label: "Baby Shower" },
  { id: "other", icon: "✨", label: "Other" },
];

const vibeOptions = [
  { id: "elegant", label: "Elegant & Refined", color: "bg-[#c4a77d]" },
  { id: "rustic", label: "Rustic & Organic", color: "bg-[#8a9a7c]" },
  { id: "modern", label: "Modern & Minimal", color: "bg-[#a39e98]" },
  { id: "bohemian", label: "Bohemian & Free", color: "bg-[#c17f59]" },
  { id: "glamorous", label: "Glamorous & Bold", color: "bg-[#d4a5a5]" },
  { id: "intimate", label: "Intimate & Cozy", color: "bg-[#6b6660]" },
];

const colorPalettes = [
  { id: "neutral", colors: ["#f5f0eb", "#c4a77d", "#8b7355", "#3d3935"], label: "Warm Neutrals" },
  { id: "sage", colors: ["#f5f0eb", "#8a9a7c", "#5a6b50", "#2f3a28"], label: "Sage & Green" },
  { id: "blush", colors: ["#f5f0eb", "#d4a5a5", "#c17f59", "#6b4a3a"], label: "Blush & Terracotta" },
  { id: "moody", colors: ["#1a1816", "#3d3935", "#6b6660", "#a39e98"], label: "Moody & Dark" },
  { id: "ocean", colors: ["#f5f0eb", "#7a9a9a", "#4a6b6b", "#2a3d3d"], label: "Ocean & Teal" },
  { id: "sunset", colors: ["#f5f0eb", "#e8967a", "#c17f59", "#6b4a3a"], label: "Sunset Warm" },
];

const serviceNeeds = [
  { id: "bartender", icon: "🍸", label: "Bartender" },
  { id: "catering", icon: "🍽️", label: "Catering" },
  { id: "planner", icon: "📋", label: "Event Planner" },
  { id: "photographer", icon: "📸", label: "Photographer" },
  { id: "videographer", icon: "🎬", label: "Videographer" },
  { id: "dj", icon: "🎵", label: "DJ / Music" },
  { id: "florist", icon: "🌸", label: "Florist" },
  { id: "decor", icon: "✨", label: "Decor & Styling" },
  { id: "servers", icon: "🍷", label: "Servers / Wait Staff" },
  { id: "cleanup", icon: "🧹", label: "Cleanup Crew" },
  { id: "rentals", icon: "🪑", label: "Furniture Rentals" },
  { id: "cake", icon: "🎂", label: "Cake / Desserts" },
];

export default function PostEvent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    guestCount: "",
    budget: "",
    vibe: "",
    colorPalette: "",
    services: [] as string[],
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  const updateForm = (key: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = async () => {
    console.log("Event submitted:", formData);
    // TODO: Submit to API
    setStep(5); // Success step
  };

  return (
    <div className="min-h-screen bg-[#1a1816] text-[#f5f0eb]">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1816]/80 backdrop-blur-lg border-b border-[#3d3935]/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold">
            Gather
          </Link>
          {step < 5 && (
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map(s => (
                <div
                  key={s}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    s === step ? "bg-[#c4a77d]" : s < step ? "bg-[#c4a77d]/50" : "bg-[#3d3935]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          
          {/* Step 1: Event Basics */}
          {step === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#c4a77d] mb-4">Step 1 of 4</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">Tell Us About Your Event</h1>
                <p className="text-[#a39e98]">The basics to get started</p>
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm text-[#a39e98] mb-3">What type of event?</label>
                <div className="grid grid-cols-4 gap-3">
                  {eventTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => updateForm("eventType", type.id)}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        formData.eventType === type.id
                          ? "border-[#c4a77d] bg-[#c4a77d]/10"
                          : "border-[#3d3935] hover:border-[#6b6660]"
                      }`}
                    >
                      <span className="text-2xl block mb-1">{type.icon}</span>
                      <span className="text-xs">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Event Date</label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={e => updateForm("eventDate", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Start Time</label>
                  <input
                    type="time"
                    value={formData.eventTime}
                    onChange={e => updateForm("eventTime", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, State or full address"
                  value={formData.location}
                  onChange={e => updateForm("location", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d]"
                />
              </div>

              {/* Guest Count & Budget */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Guest Count</label>
                  <input
                    type="number"
                    placeholder="Estimated guests"
                    value={formData.guestCount}
                    onChange={e => updateForm("guestCount", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Total Budget</label>
                  <input
                    type="text"
                    placeholder="$5,000"
                    value={formData.budget}
                    onChange={e => updateForm("budget", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!formData.eventType || !formData.eventDate || !formData.location}
                className="w-full bg-[#c4a77d] text-[#1a1816] py-4 rounded-full font-medium text-lg hover:bg-[#d4b78d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Vibe & Aesthetic */}
          {step === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#c4a77d] mb-4">Step 2 of 4</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">Set the Vibe</h1>
                <p className="text-[#a39e98]">Help vendors understand your aesthetic</p>
              </div>

              {/* Vibe Selection */}
              <div>
                <label className="block text-sm text-[#a39e98] mb-3">What's the vibe?</label>
                <div className="grid grid-cols-2 gap-3">
                  {vibeOptions.map(vibe => (
                    <button
                      key={vibe.id}
                      onClick={() => updateForm("vibe", vibe.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        formData.vibe === vibe.id
                          ? "border-[#c4a77d] bg-[#c4a77d]/10"
                          : "border-[#3d3935] hover:border-[#6b6660]"
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${vibe.color} mb-2`} />
                      <span className="text-sm font-medium">{vibe.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div>
                <label className="block text-sm text-[#a39e98] mb-3">Color palette</label>
                <div className="grid grid-cols-2 gap-3">
                  {colorPalettes.map(palette => (
                    <button
                      key={palette.id}
                      onClick={() => updateForm("colorPalette", palette.id)}
                      className={`p-4 rounded-xl border transition-all ${
                        formData.colorPalette === palette.id
                          ? "border-[#c4a77d] bg-[#c4a77d]/10"
                          : "border-[#3d3935] hover:border-[#6b6660]"
                      }`}
                    >
                      <div className="flex gap-1 mb-2">
                        {palette.colors.map((color, i) => (
                          <div key={i} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }} />
                        ))}
                      </div>
                      <span className="text-sm">{palette.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-[#3d3935] py-4 rounded-full font-medium hover:bg-[#242220] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-[#c4a77d] text-[#1a1816] py-4 rounded-full font-medium hover:bg-[#d4b78d] transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Services Needed */}
          {step === 3 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#c4a77d] mb-4">Step 3 of 4</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">What Do You Need?</h1>
                <p className="text-[#a39e98]">Select all services you're looking for</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {serviceNeeds.map(service => (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      formData.services.includes(service.id)
                        ? "border-[#c4a77d] bg-[#c4a77d]/10"
                        : "border-[#3d3935] hover:border-[#6b6660]"
                    }`}
                  >
                    <span className="text-2xl block mb-1">{service.icon}</span>
                    <span className="text-xs">{service.label}</span>
                  </button>
                ))}
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Anything else vendors should know?</label>
                <textarea
                  placeholder="Special requests, themes, must-haves..."
                  value={formData.description}
                  onChange={e => updateForm("description", e.target.value)}
                  rows={4}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d] resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-[#3d3935] py-4 rounded-full font-medium hover:bg-[#242220] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={formData.services.length === 0}
                  className="flex-1 bg-[#c4a77d] text-[#1a1816] py-4 rounded-full font-medium hover:bg-[#d4b78d] transition-colors disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#c4a77d] mb-4">Step 4 of 4</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">Almost There!</h1>
                <p className="text-[#a39e98]">How should vendors reach you?</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={e => updateForm("name", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => updateForm("email", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={e => updateForm("phone", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#c4a77d]"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 border border-[#3d3935] py-4 rounded-full font-medium hover:bg-[#242220] transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email}
                  className="flex-1 bg-[#c4a77d] text-[#1a1816] py-4 rounded-full font-medium hover:bg-[#d4b78d] transition-colors disabled:opacity-50"
                >
                  Post Event
                </button>
              </div>
            </div>
          )}

          {/* Success */}
          {step === 5 && (
            <div className="text-center py-16 animate-fadeIn">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#8a9a7c]/20 flex items-center justify-center">
                <span className="text-4xl">✓</span>
              </div>
              <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-4">Event Posted!</h1>
              <p className="text-[#a39e98] mb-8 max-w-md mx-auto">
                Your event is now live. Vendors will start reviewing and submitting bids. 
                We'll notify you when proposals come in.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#c4a77d] text-[#1a1816] px-8 py-4 rounded-full font-medium hover:bg-[#d4b78d] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
