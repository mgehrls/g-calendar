import clsx from "clsx";
import { hours } from "~/utils/globals";

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
        <div>
          {hours.map((hour, index) => (
            <div key={hour} className="relative flex">
              <div className="flex h-[40px] w-14 items-start justify-center">
                <p className="absolute -top-2 z-10 bg-white px-1 text-xs">
                  {index > 0 && hour}
                </p>
              </div>
              <div className="absolute h-[1px] w-full bg-gray-300" />
            </div>
          ))}
        </div>
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
