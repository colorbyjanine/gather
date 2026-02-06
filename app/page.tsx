import Link from "next/link";

const vendorTypes = [
  { icon: "🍸", title: "Mixologists", desc: "Bespoke cocktail experiences" },
  { icon: "🎪", title: "Event Designers", desc: "Full-service luxury coordination" },
  { icon: "💍", title: "Wedding Architects", desc: "Curating your perfect day" },
  { icon: "🍽️", title: "Private Chefs", desc: "Culinary artistry" },
  { icon: "🎵", title: "Entertainment", desc: "Live music & curated sounds" },
  { icon: "📸", title: "Visual Artists", desc: "Photo & cinema" },
  { icon: "🌸", title: "Floral Designers", desc: "Botanical artistry" },
  { icon: "✨", title: "Production Teams", desc: "Seamless execution" },
];

const howItWorks = [
  { step: "01", title: "Share Your Vision", desc: "Tell us about your event — the date, venue, guest count, aesthetic, and what excellence looks like to you." },
  { step: "02", title: "Receive Curated Proposals", desc: "Vetted professionals review your brief and submit tailored proposals with their vision and pricing." },
  { step: "03", title: "Select Your Team", desc: "Review portfolios, compare creative approaches, and choose the talent that elevates your event." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1816] text-[#f5f0eb]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1816]/80 backdrop-blur-lg border-b border-[#3d3935]/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold tracking-wide">
            Gather
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/post" className="text-sm text-[#a39e98] hover:text-[#f5f0eb] transition-colors">
              Post Event
            </Link>
            <Link href="/vendors" className="text-sm text-[#a39e98] hover:text-[#f5f0eb] transition-colors">
              For Vendors
            </Link>
            <Link 
              href="/post"
              className="text-sm bg-[#c4a77d] text-[#1a1816] px-5 py-2.5 rounded-full font-medium hover:bg-[#d4b78d] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 texture-overlay">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816] via-[#242220] to-[#1a1816]" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#c4a77d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8a9a7c]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#c4a77d] mb-6">
            Luxury Event Marketplace
          </p>
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] leading-tight mb-6">
            Exceptional Events<br />
            <span className="text-[#c4a77d]">Deserve Elite Talent</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a39e98] max-w-2xl mx-auto mb-10">
            Share your vision. Receive curated bids from vetted professionals. 
            Create moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/post"
              className="w-full sm:w-auto bg-[#c4a77d] text-[#1a1816] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#d4b78d] transition-all hover:scale-105"
            >
              Post Your Event
            </Link>
            <Link
              href="/vendors"
              className="w-full sm:w-auto border border-[#3d3935] text-[#f5f0eb] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#242220] transition-colors"
            >
              Join as Vendor
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6660]">
          <span className="text-xs tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#6b6660] to-transparent" />
        </div>
      </section>

      {/* Vendor Types */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#c4a77d] mb-4">Talent Categories</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)]">
              Curated Professionals
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vendorTypes.map((vendor, idx) => (
              <div
                key={idx}
                className="group p-6 bg-[#242220] border border-[#3d3935] rounded-2xl hover:border-[#c4a77d]/50 transition-all cursor-pointer"
              >
                <span className="text-3xl mb-4 block">{vendor.icon}</span>
                <h3 className="font-medium text-[#f5f0eb] mb-1 group-hover:text-[#c4a77d] transition-colors">
                  {vendor.title}
                </h3>
                <p className="text-sm text-[#6b6660]">{vendor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[#242220]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-[#8a9a7c] mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)]">
              How It Works
            </h2>
          </div>

          <div className="space-y-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-[#1a1816] border border-[#3d3935] flex items-center justify-center shrink-0">
                  <span className="text-[#c4a77d] font-[family-name:var(--font-cormorant)] text-xl">{item.step}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-medium text-[#f5f0eb] mb-2">{item.title}</h3>
                  <p className="text-[#a39e98]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/post"
              className="inline-block bg-[#c4a77d] text-[#1a1816] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#d4b78d] transition-colors"
            >
              Post Your First Event
            </Link>
          </div>
        </div>
      </section>

      {/* For Vendors CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-[#8a9a7c] mb-4">For Elite Professionals</p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] mb-6">
            Work With Clients Who Value Excellence
          </h2>
          <p className="text-lg text-[#a39e98] max-w-2xl mx-auto mb-10">
            Join an exclusive network of top-tier event professionals. 
            Bid on high-budget events. Set your own rates. Build your legacy.
          </p>
          <Link
            href="/vendors"
            className="inline-block border border-[#c4a77d] text-[#c4a77d] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#c4a77d] hover:text-[#1a1816] transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#3d3935]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-2xl font-[family-name:var(--font-cormorant)] font-semibold">Gather</p>
          <p className="text-sm text-[#6b6660]">© 2026 Gather. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
