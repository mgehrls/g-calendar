import { days } from "~/utils/globals";

export default function Weekdays() {
  return (
    <div className="grid grid-cols-7 gap-[1px]">
      {days.map((day, index) => {
        return (
          <div key={index} className="truncate bg-gray-300 px-4 py-1">
            {day}
          </div>
        );
      })}
    </div>
  );
}
