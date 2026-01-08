"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, Save, Plus, X, 
  Map, Image as ImageIcon, Globe, Loader2, 
  Layout, Search, Lock
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NewRoutePage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    tagline: "",
    heroImage: "",
    distance: "",
    duration: "",
    basePrice: "",
    description: "",
    isActive: true,
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });

  // --- HIGHLIGHTS STATE ---
  const [highlightInput, setHighlightInput] = useState("");
  const [highlights, setHighlights] = useState<string[]>([]);

  // Add Highlight Logic
  const addHighlight = () => {
    if (!highlightInput.trim()) return;
    setHighlights([...highlights, highlightInput.trim()]);
    setHighlightInput("");
  };

  const removeHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Auto-generate Slug from Title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') 
      .replace(/^-+|-+$/g, ''); 
    
    setFormData(prev => ({ ...prev, title, slug }));
  };

  // --- SUBMIT HANDLER ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError("");

    try {
      const payload = {
        ...formData,
        basePrice: parseInt(formData.basePrice) || 0,
        highlights: highlights,
      };

      const res = await fetch("/api/routes", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to create route");
      }

      router.push("/admin/routes");
      router.refresh();

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Helper styles
  const inputStyles = "w-full bg-[#111] border border-white/10 rounded-xl p-3 text-white focus:border-purple-500 outline-none transition-colors placeholder:text-gray-600";
  const labelStyles = "text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 block";

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      
      {/* HEADER */}
      <div className="flex items-center gap-4 border-b border-white/10 pb-6">
        <Link 
          href="/admin/routes" 
          className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Add New Route</h1>
          <p className="text-gray-400 text-sm mt-1">Create a new travel package destination.</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2">
          Error: {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col min-h-[500px]">
        
        {/* --- TABS --- */}
        <Tabs defaultValue="details" className="w-full space-y-6">
          
          <TabsList className="grid w-full grid-cols-3 bg-[#0a0a0a] border border-white/10 p-1 rounded-xl">
            <TabsTrigger 
                value="details" 
                className="gap-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg transition-all py-2.5 text-gray-400"
            >
                <Layout size={16} /> Basic Details
            </TabsTrigger>
            <TabsTrigger 
                value="content" 
                className="gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all py-2.5 text-gray-400"
            >
                <ImageIcon size={16} /> Visuals & Content
            </TabsTrigger>
            <TabsTrigger 
                value="seo" 
                className="gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg transition-all py-2.5 text-gray-400"
            >
                <Search size={16} /> SEO Settings
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: BASIC DETAILS */}
          <TabsContent value="details" className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <Map className="text-purple-400" size={20} />
                <h2 className="text-lg font-bold text-white">Route Logistics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelStyles}>Route Title</label>
                    <input 
                        type="text" name="title" required
                        value={formData.title} onChange={handleTitleChange}
                        placeholder="e.g. Lucknow to Delhi"
                        className={inputStyles}
                    />
                </div>
                <div>
                    <label className={labelStyles}>URL Slug (Auto)</label>
                    <div className="relative">
                        <input 
                            type="text" name="slug" required
                            value={formData.slug} onChange={handleChange}
                            className={`${inputStyles} pl-10 opacity-70`}
                        />
                        <Lock className="absolute left-3 top-3.5 text-gray-500" size={16} />
                    </div>
                </div>
                <div>
                    <label className={labelStyles}>Distance</label>
                    <input 
                        type="text" name="distance" required
                        value={formData.distance} onChange={handleChange}
                        placeholder="e.g. 550 km"
                        className={inputStyles}
                    />
                </div>
                <div>
                    <label className={labelStyles}>Duration</label>
                    <input 
                        type="text" name="duration" required
                        value={formData.duration} onChange={handleChange}
                        placeholder="e.g. 8-9 Hours"
                        className={inputStyles}
                    />
                </div>
                <div>
                    <label className={labelStyles}>Base Price (₹)</label>
                    <input 
                        type="number" name="basePrice" required
                        value={formData.basePrice} onChange={handleChange}
                        placeholder="e.g. 6500"
                        className={inputStyles}
                    />
                </div>
                <div>
                    <label className={labelStyles}>Status</label>
                    <select 
                        name="isActive"
                        value={String(formData.isActive)}
                        onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.value === "true" }))}
                        className={`${inputStyles} appearance-none cursor-pointer`}
                    >
                        <option value="true">Active (Visible)</option>
                        <option value="false">Draft (Hidden)</option>
                    </select>
                </div>
            </div>
          </TabsContent>

          {/* TAB 2: VISUALS & CONTENT */}
          <TabsContent value="content" className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <ImageIcon className="text-blue-400" size={20} />
                <h2 className="text-lg font-bold text-white">Content & Media</h2>
            </div>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2">
                         <label className={labelStyles}>Tagline</label>
                         <input 
                            type="text" name="tagline"
                            value={formData.tagline} onChange={handleChange}
                            placeholder="e.g. The Capital Express"
                            className={inputStyles}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className={labelStyles}>Hero Image URL</label>
                        <input 
                            type="url" name="heroImage" required
                            value={formData.heroImage} onChange={handleChange}
                            placeholder="https://..."
                            className={inputStyles}
                        />
                    </div>
                </div>

                <div>
                    <label className={labelStyles}>Description</label>
                    <textarea 
                        name="description" rows={5} required
                        value={formData.description} onChange={handleChange}
                        placeholder="Describe the journey..."
                        className={`${inputStyles} resize-none`}
                    />
                </div>

                {/* Highlights */}
                <div className="bg-[#111] p-4 rounded-xl border border-white/5">
                    <label className={labelStyles}>Trip Highlights</label>
                    <div className="flex gap-2 mb-3">
                        <input 
                            type="text" 
                            value={highlightInput}
                            onChange={(e) => setHighlightInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
                            placeholder="Add highlight..."
                            className={inputStyles}
                        />
                        <button type="button" onClick={addHighlight} className="bg-white/10 hover:bg-white/20 text-white px-4 rounded-xl transition-colors">
                            <Plus size={20} />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-200 px-3 py-1.5 rounded-lg text-sm">
                                <span>{item}</span>
                                <button type="button" onClick={() => removeHighlight(idx)} className="hover:text-white"><X size={14} /></button>
                            </div>
                        ))}
                        {highlights.length === 0 && <span className="text-gray-600 text-sm italic">No highlights yet.</span>}
                    </div>
                </div>
            </div>
          </TabsContent>

          {/* TAB 3: SEO */}
          <TabsContent value="seo" className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <Globe className="text-green-400" size={20} />
                <h2 className="text-lg font-bold text-white">Search Engine Optimization</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelStyles}>Meta Title</label>
                    <input 
                        type="text" name="metaTitle"
                        value={formData.metaTitle} onChange={handleChange}
                        className={inputStyles}
                    />
                </div>
                <div>
                    <label className={labelStyles}>Keywords</label>
                    <input 
                        type="text" name="keywords"
                        value={formData.keywords} onChange={handleChange}
                        className={inputStyles}
                    />
                </div>
                <div className="col-span-2">
                    <label className={labelStyles}>Meta Description</label>
                    <textarea 
                        name="metaDescription" rows={3}
                        value={formData.metaDescription} onChange={handleChange}
                        className={`${inputStyles} resize-none`}
                    />
                </div>
            </div>
          </TabsContent>

        </Tabs>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-8 pb-12">
            <button 
                type="submit" 
                disabled={isSaving}
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-purple-900/20 transition-all flex items-center gap-3 disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
            >
                {isSaving ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                {isSaving ? "Creating..." : "Create Route"}
            </button>
        </div>

      </form>
    </div>
  );
}