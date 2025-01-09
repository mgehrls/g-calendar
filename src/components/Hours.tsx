import { calendarHourSizeInPixels, hours } from "~/utils/globals";

export default function Hours() {
  return (
    <div>
      {hours.map((hour, index) => (
        <div key={hour} className="relative flex">
          <div
            className={`flex h-[${calendarHourSizeInPixels}px] w-14 items-start justify-center`}
          >
            <p className="absolute -top-2 z-10 bg-white px-1 text-xs">
              {index > 0 && hour}
            </p>
          </div>
          <div className="absolute h-[1px] w-full bg-gray-300" />
        </div>
      ))}
    </div>
  );
}
