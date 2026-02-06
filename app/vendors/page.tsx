"use client";

import { useState } from "react";
import Link from "next/link";

const vendorCategories = [
  { id: "bartender", icon: "🍸", label: "Bartender / Bar Service" },
  { id: "catering", icon: "🍽️", label: "Catering / Food Service" },
  { id: "planner", icon: "📋", label: "Event / Wedding Planner" },
  { id: "photographer", icon: "📸", label: "Photographer" },
  { id: "videographer", icon: "🎬", label: "Videographer" },
  { id: "dj", icon: "🎵", label: "DJ / Live Music" },
  { id: "florist", icon: "🌸", label: "Florist / Floral Design" },
  { id: "decor", icon: "✨", label: "Decor & Styling" },
  { id: "servers", icon: "🍷", label: "Servers / Wait Staff" },
  { id: "cleanup", icon: "🧹", label: "Cleanup / Post-Event" },
  { id: "rentals", icon: "🪑", label: "Furniture / Equipment Rentals" },
  { id: "cake", icon: "🎂", label: "Cakes / Desserts / Bakery" },
  { id: "officiant", icon: "💒", label: "Officiant / Ceremony" },
  { id: "transportation", icon: "🚐", label: "Transportation" },
  { id: "security", icon: "🛡️", label: "Security" },
  { id: "other", icon: "📦", label: "Other" },
];

export default function VendorSignup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    categories: [] as string[],
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    location: "",
    serviceArea: "",
    yearsExperience: "",
    bio: "",
    minBudget: "",
    portfolio: "",
  });

  const updateForm = (key: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const toggleCategory = (catId: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(catId)
        ? prev.categories.filter(c => c !== catId)
        : [...prev.categories, catId]
    }));
  };

  const handleSubmit = async () => {
    console.log("Vendor application:", formData);
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-[#1a1816] text-[#f5f0eb]">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1816]/80 backdrop-blur-lg border-b border-[#3d3935]/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold">
            Gather
          </Link>
          {step < 4 && (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map(s => (
                <div
                  key={s}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    s === step ? "bg-[#8a9a7c]" : s < step ? "bg-[#8a9a7c]/50" : "bg-[#3d3935]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Step 1: Categories */}
          {step === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a9a7c] mb-4">Vendor Application</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">Join Gather</h1>
                <p className="text-[#a39e98]">What services do you offer?</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {vendorCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      formData.categories.includes(cat.id)
                        ? "border-[#8a9a7c] bg-[#8a9a7c]/10"
                        : "border-[#3d3935] hover:border-[#6b6660]"
                    }`}
                  >
                    <span className="text-2xl block mb-1">{cat.icon}</span>
                    <span className="text-[10px] leading-tight block">{cat.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={formData.categories.length === 0}
                className="w-full bg-[#8a9a7c] text-[#1a1816] py-4 rounded-full font-medium text-lg hover:bg-[#9aaa8c] transition-colors disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Business Info */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a9a7c] mb-4">Step 2 of 3</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">Your Business</h1>
                <p className="text-[#a39e98]">Tell us about your services</p>
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Business Name</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  value={formData.businessName}
                  onChange={e => updateForm("businessName", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Contact Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.contactName}
                    onChange={e => updateForm("contactName", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Years Experience</label>
                  <input
                    type="text"
                    placeholder="e.g., 5+"
                    value={formData.yearsExperience}
                    onChange={e => updateForm("yearsExperience", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Based In</label>
                  <input
                    type="text"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={e => updateForm("location", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#a39e98] mb-2">Service Area</label>
                  <input
                    type="text"
                    placeholder="e.g., Los Angeles area"
                    value={formData.serviceArea}
                    onChange={e => updateForm("serviceArea", e.target.value)}
                    className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">About Your Services</label>
                <textarea
                  placeholder="Tell clients what makes you special..."
                  value={formData.bio}
                  onChange={e => updateForm("bio", e.target.value)}
                  rows={4}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Minimum Budget You Accept</label>
                <input
                  type="text"
                  placeholder="e.g., $500"
                  value={formData.minBudget}
                  onChange={e => updateForm("minBudget", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                />
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
                  disabled={!formData.businessName || !formData.contactName}
                  className="flex-1 bg-[#8a9a7c] text-[#1a1816] py-4 rounded-full font-medium hover:bg-[#9aaa8c] transition-colors disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact & Links */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center mb-12">
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a9a7c] mb-4">Step 3 of 3</p>
                <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-2">Contact & Portfolio</h1>
                <p className="text-[#a39e98]">How clients can find you</p>
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={e => updateForm("email", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={e => updateForm("phone", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Website (optional)</label>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  value={formData.website}
                  onChange={e => updateForm("website", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Instagram (optional)</label>
                <div className="flex">
                  <span className="bg-[#242220] border border-r-0 border-[#3d3935] rounded-l-xl px-4 py-3 text-[#6b6660]">@</span>
                  <input
                    type="text"
                    placeholder="yourhandle"
                    value={formData.instagram}
                    onChange={e => updateForm("instagram", e.target.value)}
                    className="flex-1 bg-[#242220] border border-[#3d3935] rounded-r-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#a39e98] mb-2">Portfolio Link (optional)</label>
                <input
                  type="url"
                  placeholder="Link to your work samples"
                  value={formData.portfolio}
                  onChange={e => updateForm("portfolio", e.target.value)}
                  className="w-full bg-[#242220] border border-[#3d3935] rounded-xl px-4 py-3 text-[#f5f0eb] placeholder-[#6b6660] focus:outline-none focus:border-[#8a9a7c]"
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
                  onClick={handleSubmit}
                  disabled={!formData.email || !formData.phone}
                  className="flex-1 bg-[#8a9a7c] text-[#1a1816] py-4 rounded-full font-medium hover:bg-[#9aaa8c] transition-colors disabled:opacity-50"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}

          {/* Success */}
          {step === 4 && (
            <div className="text-center py-16 animate-fadeIn">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#8a9a7c]/20 flex items-center justify-center">
                <span className="text-4xl">✓</span>
              </div>
              <h1 className="text-4xl font-[family-name:var(--font-cormorant)] mb-4">Application Received!</h1>
              <p className="text-[#a39e98] mb-8 max-w-md mx-auto">
                We'll review your application and get back to you within 48 hours. 
                Once approved, you'll be able to browse and bid on events.
              </p>
              <Link
                href="/"
                className="inline-block bg-[#8a9a7c] text-[#1a1816] px-8 py-4 rounded-full font-medium hover:bg-[#9aaa8c] transition-colors"
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
