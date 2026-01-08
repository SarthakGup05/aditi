"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, Edit, Loader2, Lock, Layout, Image as ImageIcon, Search } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Check your imports match your folder structure
import { AppModal } from "@/components/modal"; 
import { 
  AppFormInput, 
  AppFormTextarea, 
  AppFormSelect, 
} from "@/components/form";

// --- ZOD SCHEMA ---
const formSchema = z.object({
  title: z.string().min(2, "Title is required"),
  slug: z.string(), 
  tagline: z.string().optional(),
  basePrice: z.number().min(0),
  distance: z.string().min(1),
  duration: z.string().min(1),
  heroImage: z.string().url("Must be a valid URL"),
  description: z.string().min(10),
  isActive: z.string(), 
  metaTitle: z.string().optional(),
  keywords: z.string().optional(),
  metaDescription: z.string().optional(),
});

interface EditRouteModalProps {
  slug: string;
}

export function EditRouteModal({ slug }: EditRouteModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "", slug: slug, tagline: "", basePrice: 0,
      distance: "", duration: "", heroImage: "", description: "",
      isActive: "true", metaTitle: "", keywords: "", metaDescription: ""
    },
  });

  // 1. Fetch Data
  useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(`/api/routes/${slug}`);
          const data = await res.json();
          form.reset({
            title: data.title,
            slug: data.slug,
            tagline: data.tagline || "",
            basePrice: data.basePrice,
            distance: data.distance,
            duration: data.duration,
            heroImage: data.heroImage,
            description: data.description,
            isActive: String(data.isActive),
            metaTitle: data.metaTitle || "",
            keywords: data.keywords || "",
            metaDescription: data.metaDescription || "",
          });
        } catch (error) {
          console.error("Failed to fetch route");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [isOpen, slug, form]);

  // 2. Submit Data
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSaving(true);
    try {
      const payload = { ...values, isActive: values.isActive === "true" };
      const res = await fetch(`/api/routes/${slug}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to update");

      router.refresh(); 
      setIsOpen(false); 
    } catch (error) {
      alert("Failed to save changes");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AppModal
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Edit Route"
      description={`Editing details for ${slug}`}
      className="max-w-3xl bg-[#09090b] border border-white/10 shadow-2xl shadow-purple-900/10"
      trigger={
        <button className="p-2.5 bg-white/5 hover:bg-purple-500/20 rounded-lg text-gray-300 hover:text-purple-300 transition-all border border-transparent hover:border-purple-500/30">
          <Edit size={18} />
        </button>
      }
    >
      {isLoading ? (
        <div className="h-64 flex flex-col items-center justify-center gap-3 text-purple-400">
          <Loader2 className="animate-spin" size={32} />
          <span className="text-sm font-medium text-gray-500">Loading Route Data...</span>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full">
            
            {/* --- TABS INTERFACE --- */}
            <Tabs defaultValue="details" className="w-full">
              
              {/* IMPROVED TAB LIST VISIBILITY */}
              <TabsList className="grid w-full grid-cols-3 bg-black/40 p-1 border border-white/15 rounded-xl mb-6">
                <TabsTrigger 
                  value="details" 
                  className="gap-2 rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-400 hover:text-gray-200 transition-all"
                >
                  <Layout size={14} /> Basic Details
                </TabsTrigger>
                <TabsTrigger 
                  value="content" 
                  className="gap-2 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-400 hover:text-gray-200 transition-all"
                >
                  <ImageIcon size={14} /> Content
                </TabsTrigger>
                <TabsTrigger 
                  value="seo" 
                  className="gap-2 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-400 hover:text-gray-200 transition-all"
                >
                  <Search size={14} /> SEO
                </TabsTrigger>
              </TabsList>

              {/* TAB 1: DETAILS */}
              <TabsContent value="details" className="mt-0 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="grid grid-cols-2 gap-5">
                    <AppFormInput name="title" label="Route Title" placeholder="e.g. Jaipur to Agra" />
                    
                    {/* Read Only Field styling */}
                    <div className="relative group">
                        <div className="absolute right-3 top-9 text-gray-600 group-hover:text-gray-400 transition-colors">
                            <Lock size={14} />
                        </div>
                        <AppFormInput 
                            name="slug" 
                            label="Slug (Locked)" 
                            className="bg-white/5 border-dashed border-white/10 text-gray-500 cursor-not-allowed select-none" 
                        />
                    </div>

                    <AppFormInput name="distance" label="Distance" placeholder="e.g. 240 km" />
                    <AppFormInput name="duration" label="Duration" placeholder="e.g. 5 Hours" />
                    <AppFormInput name="basePrice" label="Base Price (₹)" type="number" />
                    <AppFormSelect 
                        name="isActive" 
                        label="Visibility Status" 
                        options={[
                            { label: "Active (Visible)", value: "true" },
                            { label: "Draft (Hidden)", value: "false" }
                        ]} 
                    />
                </div>
              </TabsContent>

              {/* TAB 2: CONTENT */}
              <TabsContent value="content" className="mt-0 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <AppFormInput name="tagline" label="Tagline" placeholder="e.g. The Pink City Express" />
                 <AppFormInput name="heroImage" label="Hero Image URL" placeholder="https://..." />
                 <AppFormTextarea name="description" label="Full Description" rows={6} placeholder="Write a catchy description about the route..." />
              </TabsContent>

              {/* TAB 3: SEO */}
              <TabsContent value="seo" className="mt-0 space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-bold">Preview</p>
                    <p className="text-blue-400 text-lg hover:underline cursor-pointer truncate">
                        {form.watch("metaTitle") || form.watch("title") || "Page Title"}
                    </p>
                    <p className="text-green-500 text-sm mb-1 truncate">
                        https://adititravels.com/routes/{slug}
                    </p>
                    <p className="text-gray-400 text-sm line-clamp-2">
                        {form.watch("metaDescription") || form.watch("description") || "Page description..."}
                    </p>
                 </div>
                 <AppFormInput name="metaTitle" label="Meta Title" placeholder="Leave empty to use Route Title" />
                 <AppFormInput name="keywords" label="Keywords" placeholder="taxi, cab, travel..." />
                 <AppFormTextarea name="metaDescription" label="Meta Description" rows={3} />
              </TabsContent>

            </Tabs>

            {/* --- FOOTER ACTIONS --- */}
            <div className="flex justify-end gap-3 pt-6 border-t border-white/10 mt-6">
              <button 
                type="button" 
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                disabled={isSaving}
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-900/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>

          </form>
        </Form>
      )}
    </AppModal>
  );
}