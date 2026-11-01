"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ServicesOverviewPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect immediately to the 4-card services section on the home page
    if (typeof window !== "undefined") {
      window.location.replace("/#services");
    } else {
      router.replace("/#services");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-neutral-600 text-sm font-medium">Redirecting to Services...</p>
      </div>
    </div>
  );
}
