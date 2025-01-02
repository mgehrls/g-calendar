export default function Weekdays({
  weekDatesToRender,
}: {
  weekDatesToRender: number[];
}) {
  return (
    <div className="grid grid-cols-7 gap-[1px]">
      {weekDatesToRender.map((date) => {
        return (
          <div
            key={date}
            className="flex items-center justify-center truncate text-2xl"
          >
            {date}
          </div>
        );
      })}
    </div>
  );
}
