import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin, Clock, ShieldCheck, CheckCircle2,
  Car, Phone, MessageCircle, Info, Calculator
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";

// --- TYPES ---
type Vehicle = {
  id: number;
  title: string;
  category: string;
  pricePerKm: number;
  image: string;
};

type RouteData = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  distance: string;
  duration: string;
  basePrice: number;
  description: string;
  highlights: string[];
  gallery: { imageUrl: string; caption: string }[];
};

// --- DATA FETCHING ---

async function getRouteBySlug(slug: string): Promise<RouteData | null> {
  // 🟢 FIX: Force localhost if we are in development mode
  const isDev = process.env.NODE_ENV === 'development';
  const domain = isDev ? 'http://127.0.0.1:3000' : (process.env.NEXT_PUBLIC_APP_URL || 'http://127.0.0.1:3000');
  
  const url = `${domain}/api/routes/${slug}`;

  try {
    console.log(`📡 Fetching Route from: ${url}`); // Check your terminal to see this
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) {
      console.error(`❌ Route Fetch Failed: ${res.status}`);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("🔥 Route API Error:", error);
    return null;
  }
}

// 2. UPDATE THIS FUNCTION TOO
async function getVehicles(): Promise<Vehicle[]> {
  // 🟢 FIX: Force localhost if we are in development mode
  const isDev = process.env.NODE_ENV === 'development';
  const domain = isDev ? 'http://127.0.0.1:3000' : (process.env.NEXT_PUBLIC_APP_URL || 'http://127.0.0.1:3000');
  
  const url = `${domain}/api/vehicles`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("🔥 Vehicles API Error:", error);
    return [];
  }
}

// --- METADATA ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = await getRouteBySlug(slug);

  if (!route) return { title: "Route Not Found" };

  return {
    title: `${route.title} Taxi Service | Aditi Tour & Travels`,
    description: route.tagline,
  };
}

// --- MAIN COMPONENT ---
export default async function RouteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Parallel Fetching
  const [route, vehicles] = await Promise.all([
    getRouteBySlug(slug),
    getVehicles()
  ]);

  // If route fetch failed, show 404 Page
  if (!route) {
    return notFound(); 
  }

  // Parse distance number (e.g. "550 km" -> 550)
  const distanceInt = parseInt(route.distance.replace(/\D/g, '')) || 0;

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center mt-10">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">{route.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">{route.tagline}</p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <div className="container mx-auto max-w-7xl px-6 py-12 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-2/3 space-y-16">
          
          {/* DESCRIPTION */}
          <div>
             <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Info className="text-purple-500" /> About the Journey
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed">{route.description}</p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {route.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <CheckCircle2 size={20} className="text-purple-400" />
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
             ))}
          </div>

          {/* GALLERY (Safe Check) */}
          {route.gallery && route.gallery.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-8">Sights Along the Way</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {route.gallery.map((img, i) => (
                   <div key={i} className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                      <Image src={img.imageUrl} alt={img.caption || "Sight"} fill className="object-cover" />
                      {img.caption && (
                        <div className="absolute bottom-0 w-full bg-black/60 p-2 text-center text-sm font-bold">
                           {img.caption}
                        </div>
                      )}
                   </div>
                ))}
              </div>
            </section>
          )}

          {/* FLEET CALCULATOR */}
          <section className="pt-8 border-t border-white/10">
            <h2 className="text-3xl font-bold mb-8">Available Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vehicles.map((car) => {
                const estimatedCost = distanceInt * car.pricePerKm;
                return (
                  <div key={car.id} className="rounded-3xl border border-white/10 bg-[#111] overflow-hidden">
                    <div className="relative h-48 w-full">
                       {car.image ? (
                         <Image src={car.image} alt={car.title} fill className="object-cover" />
                       ) : (
                         <div className="w-full h-full bg-gray-800 flex items-center justify-center"><Car /></div>
                       )}
                       <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded-full text-xs font-bold border border-white/10">
                         {car.category}
                       </div>
                    </div>
                    <div className="p-6">
                       <h3 className="text-xl font-bold">{car.title}</h3>
                       <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                          <Calculator size={14} className="text-purple-400"/>
                          <span>Rate: ₹{car.pricePerKm}/km</span>
                       </div>
                       <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                          <div>
                             <span className="text-xs text-gray-500">Est. Trip Cost</span>
                             <p className="text-2xl font-bold text-green-400">₹{estimatedCost.toLocaleString()}</p>
                          </div>
                          <button className="px-6 py-2 bg-white text-black font-bold rounded-xl text-sm hover:bg-gray-200">
                             Book
                          </button>
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full lg:w-1/3">
          <div className="sticky top-24 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Trip Summary</h3>
            <div className="space-y-4 text-sm text-gray-400 mb-6">
               <div className="flex justify-between pb-2 border-b border-white/10">
                  <span>Distance</span>
                  <span className="text-white font-bold">{route.distance}</span>
               </div>
               <div className="flex justify-between pb-2 border-b border-white/10">
                  <span>Duration</span>
                  <span className="text-white font-bold">{route.duration}</span>
               </div>
               <div className="flex justify-between">
                  <span>Base Price</span>
                  <span className="text-white font-bold">₹{route.basePrice}</span>
               </div>
            </div>
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl mb-3 flex items-center justify-center gap-2">
               <Phone size={18} /> Call to Book
            </button>
            <button className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl flex items-center justify-center gap-2">
               <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </aside>

      </div>
    </main>
  );
}