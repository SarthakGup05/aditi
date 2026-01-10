"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, Edit, Loader2, Car, Banknote, FileText, Fuel, Eye, Plus, X, ListCheck } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppModal } from "@/components/modal";
import {
    AppFormInput,
    AppFormSelect,
    AppFormTextarea,
} from "@/components/form";

// 1. Updated Schema to include 'features'
const formSchema = z.object({
    title: z.string().min(2, "Vehicle title is required"),
    category: z.string(),
    seats: z.string().min(1, "Seats info required"),
    bags: z.string().min(1, "Bags info required"),
    pricePerKm: z.coerce.number().min(0),
    imageUrl: z.string().url("Must be a valid URL"),
    description: z.string().optional(),
    fuel: z.string().optional(),
    features: z.array(z.string()).optional(), // Added features array
});

interface EditFleetModalProps {
    id: number;
    isReadOnly?: boolean;
}

export function EditFleetModal({ id, isReadOnly = false }: EditFleetModalProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    
    // State for the temporary feature input
    const [newFeature, setNewFeature] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        disabled: isReadOnly,
        defaultValues: {
            title: "",
            category: "SEDAN",
            seats: "4",
            bags: "2",
            pricePerKm: 0,
            imageUrl: "",
            description: "",
            fuel: "Petrol/Diesel",
            features: [] as string[], // Initialize as empty array
        },
    });

    // Fetch Data on Open
    useEffect(() => {
        if (isOpen) {
            const fetchData = async () => {
                setIsLoading(true);
                try {
                    const res = await fetch(`/api/vehicles/${id}`);
                    const data = await res.json();

                    // Map API response to form fields
                    form.reset({
                        title: data.title || "",
                        category: data.category || "SEDAN",
                        seats: data.seats ? String(data.seats) : "4",
                        bags: data.bags ? String(data.bags) : "2",
                        pricePerKm: data.pricePerKm || 0,
                        imageUrl: data.image || "",
                        description: data.description || "",
                        fuel: data.fuel || "",
                        // Handle JSON features: Ensure it's an array
                        features: Array.isArray(data.features) ? data.features : [],
                    });
                } catch (error) {
                    console.error("Failed to fetch fleet");
                } finally {
                    setIsLoading(false);
                }
            };
            fetchData();
        }
    }, [isOpen, id, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSaving(true);
        try {
            const payload = {
                title: values.title,
                category: values.category,
                seats: values.seats,
                bags: values.bags,
                pricePerKm: values.pricePerKm,
                image: values.imageUrl,
                description: values.description,
                fuel: values.fuel,
                features: values.features, // Send array directly (Prisma handles JSON)
            };

            await fetch(`/api/vehicles/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            router.refresh();
            setIsOpen(false);
        } catch (error) {
            alert("Update failed");
        } finally {
            setIsSaving(false);
        }
    };

    // Helper to add a feature to the list
    const handleAddFeature = () => {
        if (!newFeature.trim()) return;
        const currentFeatures = form.getValues("features") || [];
        form.setValue("features", [...currentFeatures, newFeature.trim()]);
        setNewFeature("");
    };

    // Helper to remove a feature
    const handleRemoveFeature = (indexToRemove: number) => {
        const currentFeatures = form.getValues("features") || [];
        form.setValue("features", currentFeatures.filter((_, idx) => idx !== indexToRemove));
    };

    return (
        <AppModal
            open={isOpen}
            onOpenChange={setIsOpen}
            title={isReadOnly ? "View Vehicle Details" : "Edit Vehicle"}
            description={isReadOnly ? `Viewing details for ID #${id}` : `Update details for ID #${id}`}
            className="max-w-4xl bg-[#09090b]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20"
            trigger={
                <button className={`p-2 rounded-lg transition-colors ${isReadOnly
                        ? "hover:bg-blue-500/20 text-blue-400 hover:text-blue-300"
                        : "hover:bg-purple-500/20 text-purple-400 hover:text-purple-300"
                    }`}>
                    {isReadOnly ? <Eye size={18} /> : <Edit size={18} />}
                </button>
            }
        >
            {isLoading ? (
                <div className="h-96 flex items-center justify-center text-purple-500">
                    <Loader2 className="animate-spin" size={48} />
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Tabs defaultValue="details" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-black/40 border border-white/10 rounded-xl p-1 mb-8">
                                <TabsTrigger
                                    value="details"
                                    className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300 py-3 text-sm tracking-wide font-medium text-gray-400"
                                >
                                    <Car size={16} className="mr-2" /> Vehicle Details
                                </TabsTrigger>
                                <TabsTrigger
                                    value="pricing"
                                    className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white transition-all duration-300 py-3 text-sm tracking-wide font-medium text-gray-400"
                                >
                                    <Banknote size={16} className="mr-2" /> Pricing & Gallery
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="details" className="space-y-6">
                                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar space-y-6">
                                    {/* Section 1: Identity */}
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-6 text-purple-400">
                                            <FileText size={20} />
                                            <h3 className="text-lg font-semibold text-white tracking-tight">Identity & Category</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <AppFormInput name="title" label="Vehicle Model" placeholder="e.g. Toyota Innova Crysta" className="md:col-span-2" />
                                            <AppFormSelect
                                                name="category" label="Vehicle Category"
                                                options={[
                                                    { label: "Sedan (Standard 4-Seater)", value: "SEDAN" },
                                                    { label: "SUV (Premium 6-7 Seater)", value: "SUV" },
                                                    { label: "Tempo Traveler (Group 12+)", value: "TEMPO" },
                                                    { label: "Urbania (Luxury Van)", value: "URBANIA" },
                                                ]}
                                            />
                                            <AppFormInput name="fuel" label="Fuel Type" placeholder="e.g. Diesel / Petrol / Hybrid" />
                                        </div>
                                    </div>

                                    {/* Section 2: Specs */}
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-6 text-indigo-400">
                                            <Car size={20} />
                                            <h3 className="text-lg font-semibold text-white tracking-tight">Technical Specifications</h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <AppFormInput name="seats" label="Seating Capacity" placeholder="e.g. 4 + 1 Driver" />
                                            <AppFormInput name="bags" label="Luggage Space" placeholder="e.g. 2 Large Bags" />
                                            
                                            <div className="col-span-2">
                                                <AppFormTextarea name="description" label="General Description" placeholder="Highlight overall vehicle experience..." rows={2} />
                                            </div>

                                            {/* --- NEW: Features Management --- */}
                                            <div className="col-span-2 space-y-3 pt-4 border-t border-white/10">
                                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                    <ListCheck size={14} /> Key Features List
                                                </label>
                                                
                                                {/* Add Feature Input */}
                                                {!isReadOnly && (
                                                    <div className="flex gap-2">
                                                        <input 
                                                            type="text" 
                                                            value={newFeature}
                                                            onChange={(e) => setNewFeature(e.target.value)}
                                                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                                                            placeholder="Type feature (e.g. 'Push-back Seats') and add"
                                                            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                        />
                                                        <button 
                                                            type="button" 
                                                            onClick={handleAddFeature}
                                                            className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors"
                                                        >
                                                            <Plus size={18} />
                                                        </button>
                                                    </div>
                                                )}

                                                {/* Features List */}
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {form.watch("features")?.length === 0 && (
                                                        <span className="text-xs text-gray-500 italic">No features added yet.</span>
                                                    )}
                                                    {form.watch("features")?.map((feat, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 bg-white/10 text-gray-200 text-xs px-3 py-1.5 rounded-full border border-white/5">
                                                            <span>{feat}</span>
                                                            {!isReadOnly && (
                                                                <button 
                                                                    type="button" 
                                                                    onClick={() => handleRemoveFeature(idx)}
                                                                    className="text-gray-400 hover:text-red-400"
                                                                >
                                                                    <X size={12} />
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* --- END Features --- */}

                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="pricing" className="space-y-6">
                                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar space-y-6">

                                    {/* Section 3: Pricing */}
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-6 text-emerald-400">
                                            <Banknote size={20} />
                                            <h3 className="text-lg font-semibold text-white tracking-tight">Rental Economics</h3>
                                        </div>
                                        <div className="grid grid-cols-1 gap-6">
                                            <AppFormInput name="pricePerKm" label="Base Rate (₹/km)" type="number" placeholder="00" className="text-xl" />
                                        </div>
                                    </div>

                                    {/* Section 4: Visuals */}
                                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-6 text-pink-400">
                                            <Fuel size={20} className="rotate-90" />
                                            <h3 className="text-lg font-semibold text-white tracking-tight">Visual Presentation</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <AppFormInput name="imageUrl" label="Image Source URL" placeholder="https://example.com/image.jpg" />

                                            {/* Image Preview */}
                                            <div className="relative w-full h-48 bg-black/50 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center group">
                                                {form.watch("imageUrl") ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={form.watch("imageUrl")}
                                                        alt="Vehicle Preview"
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="text-gray-600 text-sm">No image preview available</div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Footer Actions */}
                        <div className="flex justify-between items-center pt-6 border-t border-white/10">
                            {isReadOnly ? (
                                <div className="text-xs text-gray-400 italic">
                                    *Read-only mode. Switch to Edit to make changes.
                                </div>
                            ) : (
                                <div className="text-xs text-gray-500 px-2">
                                    *All changes are saved immediately to database
                                </div>
                            )}

                            <div className="flex gap-4">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium">
                                    {isReadOnly ? "Close" : "Cancel"}
                                </button>
                                {!isReadOnly && (
                                    <button type="submit" disabled={isSaving} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-purple-900/40 flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                        {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                                        Save Changes
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </Form>
            )}
        </AppModal>
    );
}