import { EventoEvent } from "@/lib/type";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return <section>{event.name}</section>;
}
