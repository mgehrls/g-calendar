import { daysShort } from "~/utils/globals";

export default function SchedulerWeekdays() {
  const daysShortMinusWeekends = daysShort.filter(
    (day, index) => index !== 0 && index !== 6,
  );
  return (
    <div className="grid grid-cols-5 gap-[1px]">
      {daysShortMinusWeekends.map((day, index) => {
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
