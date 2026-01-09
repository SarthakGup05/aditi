"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, Edit, Loader2, Car, Banknote, Image as ImageIcon } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppModal } from "@/components/modal";
import {
    AppFormInput,
    AppFormSelect,
} from "@/components/form";

const formSchema = z.object({
    name: z.string().min(2, "Vehicle name is required"),
    category: z.string(), // e.g. Sedan, SUV
    capacity: z.coerce.number().min(1), // Seats
    luggage: z.coerce.number().min(0),  // Bags
    pricePerKm: z.coerce.number().min(0),
    minFare: z.coerce.number().optional(),
    imageUrl: z.string().url("Must be a valid URL"),
    isAvailable: z.string(), // "true" or "false"
});

interface EditFleetModalProps {
    id: number; // Fleets usually use numeric IDs
}

export function EditFleetModal({ id }: EditFleetModalProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            category: "SEDAN",
            capacity: 4,
            luggage: 2,
            pricePerKm: 0,
            minFare: 0,
            imageUrl: "",
            isAvailable: "true"
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
                    form.reset({
                        name: data.name,
                        category: data.category,
                        capacity: data.capacity,
                        luggage: data.luggage,
                        pricePerKm: data.pricePerKm,
                        minFare: data.minFare || 0,
                        imageUrl: data.imageUrl,
                        isAvailable: String(data.isAvailable),
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
            const payload = { ...values, isAvailable: values.isAvailable === "true" };
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

    return (
        <AppModal
            open={isOpen}
            onOpenChange={setIsOpen}
            title="Edit Vehicle"
            description={`Update details for ID #${id}`}
            className="max-w-2xl bg-[#09090b] border border-white/10"
            trigger={
                <button className="p-2 hover:bg-purple-500/20 rounded-lg text-purple-400 hover:text-purple-300 transition-colors">
                    <Edit size={18} />
                </button>
            }
        >
            {isLoading ? (
                <div className="h-64 flex items-center justify-center text-purple-500">
                    <Loader2 className="animate-spin" size={32} />
                </div>
            ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <Tabs defaultValue="details" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-black/40 border border-white/15 rounded-xl mb-6">
                                <TabsTrigger value="details" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                                    <Car size={14} className="mr-2" /> Details
                                </TabsTrigger>
                                <TabsTrigger value="pricing" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                                    <Banknote size={14} className="mr-2" /> Pricing & Visuals
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="details" className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <AppFormInput name="name" label="Vehicle Name" placeholder="e.g. Innova Crysta" />
                                    <AppFormSelect
                                        name="category" label="Category"
                                        options={[
                                            { label: "Sedan (4 Seater)", value: "SEDAN" },
                                            { label: "SUV (6-7 Seater)", value: "SUV" },
                                            { label: "Tempo (12+ Seater)", value: "TEMPO" },
                                        ]}
                                    />
                                    <AppFormInput name="capacity" label="Seats" type="number" />
                                    <AppFormInput name="luggage" label="Luggage Bags" type="number" />
                                    <AppFormSelect
                                        name="isAvailable" label="Status"
                                        options={[{ label: "Available", value: "true" }, { label: "Maintenance", value: "false" }]}
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="pricing" className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <AppFormInput name="pricePerKm" label="Price Per Km (₹)" type="number" />
                                    <AppFormInput name="minFare" label="Minimum Fare (₹)" type="number" />
                                </div>
                                <div className="pt-2">
                                    <AppFormInput name="imageUrl" label="Vehicle Image URL" placeholder="https://..." />
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
                            <button type="submit" disabled={isSaving} className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2">
                                {isSaving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />} Save
                            </button>
                        </div>
                    </form>
                </Form>
            )}
        </AppModal>
    );
}