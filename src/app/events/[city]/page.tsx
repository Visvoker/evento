import EventsList from "@/components/events-list";
import H1 from "@/components/h1";

import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({ params }: Props) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[100vh]">
      {city === "all" ? (
        <H1 className="mb-28">All Events</H1>
      ) : (
        <H1 className="mb-28">Event in {capitalize(city)}</H1>
      )}
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
