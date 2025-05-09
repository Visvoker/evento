"use client";

import H1 from "@/components/h1";
import { usePathname } from "next/navigation";
import React from "react";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default function EventsPage({ params }: EventsPageProps) {
  const pathName = usePathname();
  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      {city === "all" ? (
        <H1>All Events</H1>
      ) : (
        <H1>Event in {city.charAt(0).toUpperCase() + city.slice(1)}</H1>
      )}
    </main>
  );
}
