import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothWrapper from "@/components/layout/SmoothWrapper";
import { FloatingContact } from "@/components/ui/floating-contact";
import NextTopLoader from 'nextjs-toploader'; 

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* 🟢 MOVE THIS HERE: Outside the SmoothWrapper */}
      <NextTopLoader
        color="#a855f7"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #a855f7,0 0 5px #a855f7"
        zIndex={1600} // Ensure this is higher than your Navbar z-index
      />

      <SmoothWrapper>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingContact phone="+1234567890" whatsapp="+1234567890"/>
        </div>
      </SmoothWrapper>
    </>
  );
}