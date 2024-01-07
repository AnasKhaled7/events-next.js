import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { ArrowUpRight, Pencil } from "lucide-react";
import { IEvent } from "@/lib/database/models/event.model";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { formatDateTime } from "@/lib/utils";
import { Separator } from "../ui/separator";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl border md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />

      {/* IS EVENT CREATOR ... */}
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 border flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md">
          <Link href={`/events/${event._id}/update`}>
            <Pencil size={20} className="text-primary-500" />
          </Link>

          <Separator />

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 rounded-full bg-green-100 px-4 py-1 text-green-600">
              {event.isFree ? "FREE" : `EGP ${event.price}`}
            </span>
            <p className="p-semibold-14 rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        )}

        <p className="p-medium-16 md:p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black underline">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <ArrowUpRight size={18} className="text-primary-500" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
