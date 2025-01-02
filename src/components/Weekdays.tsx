import { daysShort } from "~/utils/globals";

export default function Weekdays() {
  return (
    <div className="grid grid-cols-7 gap-[1px]">
      {daysShort.map((day, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center truncate text-xs"
          >
            {day.toLocaleUpperCase()}
          </div>
        );
      })}
    </div>
  );
}
