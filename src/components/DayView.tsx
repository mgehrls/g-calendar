import clsx from "clsx";
import { hours } from "~/utils/globals";
import Hours from "./Hours";

export default function DayView({
  day,
  date,
  isCurrentDate,
}: {
  day: string;
  date: number;
  isCurrentDate?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col items-start justify-center rounded-t-3xl bg-white">
        <div className="flex flex-col items-center justify-center p-4">
          <p
            className={clsx(
              "text-xs uppercase",
              isCurrentDate && "text-blue-500",
            )}
          >
            {day}
          </p>
          <div
            className={clsx(
              "flex size-12 items-center justify-center rounded-full",
              isCurrentDate && "bg-blue-500 text-white",
            )}
          >
            <p className="text-2xl font-semibold">{date}</p>
          </div>
        </div>
      </div>
      <div className="flex overflow-y-scroll rounded-b-3xl bg-white">
        <Hours />
        <div className="flex h-full w-full flex-col border-l-[1px] bg-white">
          {hours.map((hour) => (
            <div key={hour} className="relative flex w-full">
              <div className="h-[40px] w-full" />
              <div className="absolute h-[1px] w-full bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
