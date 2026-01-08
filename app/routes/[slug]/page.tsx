import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  MapPin, Clock, ShieldCheck, CheckCircle2, 
  Car, Phone, MessageCircle, Star, Info
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import db from "@/lib/db"; // 1. IMPORT YOUR DATABASE CLIENT
import type { Metadata } from "next";

// --- REMOVE MOCK_DB ARRAY COMPLETELY ---

// 2. FETCH DATA FUNCTION
async function getRouteBySlug(slug: string) {
  // Use Prisma to find the route matching the slug
  const route = await db.serviceRoute.findUnique({
    where: { 
        slug: slug,
        isActive: true // Only show active routes
    },
    include: {
      gallery: true,   // Include related gallery images
      packages: true,  // Include related vehicle packages
    }
  });
  return route;
}

// 3. GENERATE METADATA (SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = await getRouteBySlug(slug);
  
  if (!route) return { title: "Route Not Found | Aditi Tour & Travels" };

  return {
    title: route.metaTitle || `${route.title} Taxi Service | Aditi Tour & Travels`,
    description: route.metaDescription || `Book premium taxi for ${route.title}. Starting at ₹${route.basePrice}.`,
    alternates: {
        canonical: route.canonicalUrl || `https://adititravels.com/${slug}`
    }
  };
}

// 4. MAIN PAGE COMPONENT
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

  // Cast 'highlights' to string array because Prisma returns it as Json
  const highlights = route.highlights as string[];

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white selection:bg-purple-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={route.heroImage} // Changed from route.image
            alt={`${route.title} Taxi Route`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>
        
        {/* ... (Keep your Hero Text code same as before) ... */}
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
               {highlights.map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                   <CheckCircle2 size={20} className="text-purple-400" />
                   <span className="font-medium text-gray-200">{item}</span>
                 </div>
               ))}
             </div>
          </article>

          {/* Gallery - Dynamic from DB */}
          {route.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Sights Along the Way</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
                {/* Main Large Image */}
                <div className="md:col-span-2 relative h-full rounded-3xl overflow-hidden group">
                  <Image src={route.gallery[0].imageUrl} alt="Main Sight" fill className="object-cover" />
                </div>
                {/* Smaller Images */}
                <div className="flex flex-col gap-4 h-full">
                  {route.gallery.slice(1, 3).map((img, i) => (
                    <div key={i} className="relative flex-1 rounded-3xl overflow-hidden">
                       <Image src={img.imageUrl} alt="Sight" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Pricing Cards - Dynamic from DB */}
          <section id="fleet" className="space-y-8 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold">Choose Your Comfort</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {route.packages.map((plan) => (
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

        {/* Right Sidebar (Keep static or make dynamic later) */}
        <aside className="w-full lg:w-1/3">
           {/* ... Keep your existing Booking Card code ... */}
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