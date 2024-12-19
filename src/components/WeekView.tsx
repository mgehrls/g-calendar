import Weekdays from "./Weekdays";

const WeekView = ({
  currentDateOnDisplay,
  weekDatesToRender,
  currentDate,
}: {
  currentDateOnDisplay: boolean;
  weekDatesToRender: number[];
  currentDate: Date;
}) => {
  return (
    <div className="flex h-full flex-col gap-[1px] bg-black p-[1px]">
      <Weekdays />
      <div className="grid h-full grid-cols-7 grid-rows-[auto] gap-[1px] overflow-auto">
        {weekDatesToRender.map((date, index) => {
          return (
            <div
              key={index}
              className={`bg-gray-300 p-4 ${currentDateOnDisplay && date === currentDate.getDate() ? "bg-blue-300" : ""}`}
            >
              {date}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekView;
