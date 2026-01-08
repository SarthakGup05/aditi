import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  MapPin, Clock, ShieldCheck, CheckCircle2, 
  Car, Phone, MessageCircle, Star, Info
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// ❌ REMOVED: import db from "@/lib/db"; (We fetch from API now)
import type { Metadata } from "next";

// 1. FETCH DATA FROM YOUR NEW API
async function getRouteBySlug(slug: string) {
  // Define your base URL (Use localhost for dev, domain for prod)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  try {
    // Call the API route we created: /api/routes/[slug]
    const res = await fetch(`${baseUrl}/api/routes/${slug}`, {
      cache: 'no-store', // Ensures we always get fresh data
    });

    if (!res.ok) return null;

    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

// 2. GENERATE METADATA (SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = await getRouteBySlug(slug);
  
  if (!route) return { title: "Route Not Found | Aditi Tour & Travels" };

  return {
    title: route.metaTitle || `${route.title} Taxi Service | Aditi Tour & Travels`,
    description: route.metaDescription || `Book premium taxi for ${route.title}. Starting at ₹${route.basePrice}.`,
    alternates: {
        canonical: route.canonicalUrl || `https://adititravels.com/routes/${slug}`
    }
  };
}

// 3. MAIN PAGE COMPONENT
export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = await getRouteBySlug(slug);

  if (!route) notFound(); 

  // JSON-LD Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${route.title} Taxi Service`,
    "provider": { "@type": "LocalBusiness", "name": "Aditi Tour & Travels" },
    "description": route.description,
    "offers": {
      "@type": "Offer",
      "price": route.basePrice,
      "priceCurrency": "INR"
    }
  };

  // Safe check for highlights (API returns JSON, so it might already be an array)
  const highlights = Array.isArray(route.highlights) 
    ? route.highlights 
    : [];

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white selection:bg-purple-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={route.heroImage} 
            alt={`${route.title} Taxi Route`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>
        
         <div className="relative z-10 container mx-auto px-6 text-center mt-10">
           <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl">
             {route.title}
           </h1>
           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
             {route.tagline}
           </p>
         </div>

        {/* Floating Stats Strip */}
        <div className="absolute bottom-8 left-0 w-full z-20">
          <div className="container mx-auto px-6">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 shadow-2xl">
              <StatItem icon={<MapPin className="text-purple-400" />} label="Distance" value={route.distance} />
              <StatItem icon={<Clock className="text-purple-400" />} label="Duration" value={route.duration} />
              <StatItem icon={<ShieldCheck className="text-purple-400" />} label="Safety" value="Verified" />
              <StatItem icon={<Car className="text-purple-400" />} label="Start Price" value={`₹${route.basePrice}`} />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT LAYOUT --- */}
      <div className="container mx-auto max-w-7xl px-6 py-24 flex flex-col lg:flex-row gap-16 relative z-10">
        
        <div className="w-full lg:w-2/3 space-y-20">
          {/* Highlights */}
          <article className="space-y-8">
             <div>
               <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                 <Info className="text-purple-500" /> About the Journey
               </h2>
               <p className="text-gray-400 leading-relaxed text-lg">{route.description}</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {highlights.map((item: string, i: number) => (
                 <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                   <CheckCircle2 size={20} className="text-purple-400" />
                   <span className="font-medium text-gray-200">{item}</span>
                 </div>
               ))}
             </div>
          </article>

          {/* Gallery - Dynamic from API */}
          {route.gallery && route.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Sights Along the Way</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
                {/* Main Large Image */}
                <div className="md:col-span-2 relative h-full rounded-3xl overflow-hidden group">
                  <Image src={route.gallery[0].imageUrl} alt="Main Sight" fill className="object-cover" />
                </div>
                {/* Smaller Images */}
                <div className="flex flex-col gap-4 h-full">
                  {route.gallery.slice(1, 3).map((img: any, i: number) => (
                    <div key={i} className="relative flex-1 rounded-3xl overflow-hidden">
                       <Image src={img.imageUrl} alt="Sight" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Pricing Cards - Dynamic from API */}
          <section id="fleet" className="space-y-8 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold">Choose Your Comfort</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {route.packages?.map((plan: any) => (
                  <div key={plan.id} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
                    <div className="relative h-48 w-full">
                       <Image src={plan.image} alt={plan.carModel} fill className="object-cover" />
                       <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold text-white border border-white/10">
                         {plan.category}
                       </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{plan.carModel}</h3>
                      <div className="flex gap-3 text-xs text-gray-500 mt-1">
                        <span>{plan.seats} Seats</span> • <span>{plan.bags} Bags</span>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                         <span className="text-2xl font-bold text-purple-400">₹{plan.price}</span>
                         <button className="px-4 py-2 bg-white text-black font-bold rounded-lg text-sm">Book</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3">
            {/* Keeping the sidebar space ready for booking component */}
            <div className="sticky top-24 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Book This Ride</h3>
                <p className="text-gray-400 text-sm mb-6">Call us to confirm availability instantly.</p>
                <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl mb-3 flex items-center justify-center gap-2">
                    <Phone size={18} /> Call Now
                </button>
                <button className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2">
                    <MessageCircle size={18} /> WhatsApp
                </button>
            </div>
        </aside>

      </div>
      <Footer />
    </main>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
      <div className="p-2 rounded-lg bg-white/5 border border-white/10">{icon}</div>
      <div>
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{label}</p>
        <p className="text-base font-bold text-white">{value}</p>
      </div>
    </div>
  );
}