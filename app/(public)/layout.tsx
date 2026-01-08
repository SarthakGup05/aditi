import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothWrapper from "@/components/layout/SmoothWrapper";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothWrapper>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </SmoothWrapper>
  );
}