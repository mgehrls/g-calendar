import clsx from "clsx";

export default function Weekdays({
  weekDatesToRender,
  currentDateOnDisplay,
  currentDate,
}: {
  weekDatesToRender: number[];
  currentDateOnDisplay: boolean;
  currentDate: Date;
}) {
  return (
    <div className="grid grid-cols-7 gap-[1px]">
      {weekDatesToRender.map((date) => {
        const isCurrentDate =
          currentDateOnDisplay && date === currentDate.getDate();
        return (
          <div key={date} className="flex items-center justify-center">
            <div
              className={clsx(
                "flex size-12 items-center justify-center truncate rounded-full text-2xl",
                isCurrentDate && "bg-blue-500 text-white",
              )}
            >
              {date}
            </div>
          </div>
        );
      })}
    </div>
  );
}
