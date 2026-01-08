"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// --- 1. SHARED STYLES ---
const inputStyles = "bg-[#111] border-white/10 focus:border-purple-500 text-white rounded-xl placeholder:text-gray-600";
const labelStyles = "text-xs font-bold text-gray-500 uppercase tracking-wide";

// --- 2. REUSABLE SECTION WRAPPER ---
// Keeps your "Card" look consistent across the app
export function FormSection({ 
  title, 
  icon: Icon, 
  children,
  className 
}: { 
  title: string; 
  icon?: LucideIcon; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 space-y-6", className)}>
      <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
        {Icon && <Icon className="text-purple-400" size={20} />}
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
}

// --- 3. REUSABLE INPUT ---
interface AppInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
  className?: string; // For things like "col-span-2"
}

export function AppFormInput({ name, label, placeholder, type = "text", description, className }: AppInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={labelStyles}>{label}</FormLabel>
          <FormControl>
            <Input 
                {...field} 
                type={type} 
                placeholder={placeholder} 
                className={inputStyles} 
                // Handle number inputs cleanly
                onChange={(e) => {
                    const val = type === 'number' ? parseFloat(e.target.value) : e.target.value;
                    field.onChange(val);
                }}
            />
          </FormControl>
          {description && <p className="text-xs text-gray-500">{description}</p>}
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}

// --- 4. REUSABLE TEXTAREA ---
export function AppFormTextarea({ name, label, placeholder, className, rows = 4 }: AppInputProps & { rows?: number }) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={labelStyles}>{label}</FormLabel>
          <FormControl>
            <Textarea 
                {...field} 
                placeholder={placeholder} 
                className={cn(inputStyles, "resize-none min-h-[100px]")} 
                rows={rows}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}

// --- 5. REUSABLE SELECT ---
interface Option { label: string; value: string; }
export function AppFormSelect({ name, label, options, className }: AppInputProps & { options: Option[] }) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className={labelStyles}>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value ? String(field.value) : undefined}>
            <FormControl>
              <SelectTrigger className={inputStyles}>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-[#111] border-white/10 text-white">
              {options.map((opt) => (
                <SelectItem 
                    key={opt.value} 
                    value={opt.value}
                    className="focus:bg-purple-600 focus:text-white"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}