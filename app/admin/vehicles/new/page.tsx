"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, ArrowLeft, Loader2, Car, Banknote, List } from "lucide-react";
import Link from "next/link";

import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    AppFormInput,
    AppFormSelect,
    AppFormTextarea,
} from "@/components/form";

const formSchema = z.object({
    title: z.string().min(2, "Vehicle title is required"),
    category: z.string(),
    seats: z.string().min(1, "Seats info required"),
    bags: z.string().min(1, "Bags info required"),
    pricePerKm: z.coerce.number().min(0, "Price must be positive"),
    imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    description: z.string().optional(),
    fuel: z.string().optional(),
    features: z.string().optional(), // Comma separated string for input
});

export default function NewVehiclePage() {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: "SEDAN",
            seats: "",
            bags: "",
            pricePerKm: 0,
            imageUrl: "",
            description: "",
            fuel: "",
            features: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSaving(true);
        try {
            // Process features string into array
            const featureList = values.features
                ? values.features.split(',').map(f => f.trim()).filter(f => f.length > 0)
                : [];

            const payload = {
                ...values,
                image: values.imageUrl, // Map to API expected key
                features: featureList
            };

            const res = await fetch("/api/vehicles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to create vehicle");
            }

            router.push("/admin/vehicles");
            router.refresh();
        } catch (error: any) {
            console.error(error);
            alert(error.message || "Failed to create vehicle package.");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#050505] p-6 lg:p-10 text-white">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* HEADER */}
                <div className="flex items-center gap-4">
                    <Link href="/admin/vehicles" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">Add New Vehicle</h1>
                        <p className="text-gray-400">Create a new fleet package for your routes.</p>
                    </div>
                </div>

                {/* FORM */}
                <div className="bg-[#09090b] border border-white/10 rounded-2xl p-6 lg:p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <Tabs defaultValue="details" className="w-full">
                                <TabsList className="w-full grid grid-cols-2 bg-black/40 border border-white/15 rounded-xl h-12 p-1 mb-8">
                                    <TabsTrigger value="details" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg h-full">
                                        <Car size={16} className="mr-2" /> Vehicle Details
                                    </TabsTrigger>
                                    <TabsTrigger value="pricing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg h-full">
                                        <Banknote size={16} className="mr-2" /> Pricing & Features
                                    </TabsTrigger>
                                </TabsList>

                                {/* TAB 1: DETAILS */}
                                <TabsContent value="details" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <AppFormInput name="title" label="Vehicle Title" placeholder="e.g. Swift Dzire / Etios" />

                                        <AppFormSelect
                                            name="category" label="Category"
                                            options={[
                                                { label: "Sedan (4 Seater)", value: "SEDAN" },
                                                { label: "SUV (6-7 Seater)", value: "SUV" },
                                                { label: "Tempo (12+ Seater)", value: "TEMPO" },
                                                { label: "Urbania (Premium)", value: "URBANIA" },
                                            ]}
                                        />

                                        <AppFormInput name="seats" label="Seating Capacity" placeholder="e.g. 4+1" />
                                        <AppFormInput name="bags" label="Luggage Capacity" placeholder="e.g. 2 Bags" />

                                        <AppFormInput name="fuel" label="Fuel Type" placeholder="e.g. Diesel/CNG" />
                                    </div>

                                    <AppFormTextarea
                                        name="description"
                                        label="Description"
                                        placeholder="Detailed description of the vehicle and comfort levels..."
                                    />
                                </TabsContent>

                                {/* TAB 2: PRICING & EXTRAS */}
                                <TabsContent value="pricing" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <AppFormInput
                                            name="pricePerKm"
                                            label="Price Per Km (₹)"
                                            type="number"
                                            placeholder="0"
                                        />
                                        <div className="md:col-span-2">
                                            <AppFormInput
                                                name="imageUrl"
                                                label="Vehicle Image URL"
                                                placeholder="https://..."
                                            />
                                            {form.watch("imageUrl") && (
                                                <div className="mt-4 relative h-48 w-full md:w-96 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                                    {/* Using img for preview to avoid Next/Image complexity with external unchecked URLs */}
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={form.watch("imageUrl") || ""}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white font-medium mb-1">
                                            <List size={16} className="text-purple-400" /> Key Features
                                        </div>
                                        <AppFormTextarea
                                            name="features"
                                            label="Features List (Comma Separated)"
                                            placeholder="e.g. AC, Pushback Seats, Music System, Boot Space"
                                        />
                                        <p className="text-xs text-gray-500">Separate multiple features with commas.</p>
                                    </div>
                                </TabsContent>
                            </Tabs>

                            <div className="flex items-center justify-end gap-4 pt-6 border-t border-white/10">
                                <Link href="/admin/vehicles" className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                                >
                                    {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                                    Create Vehicle Package
                                </button>
                            </div>

                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
