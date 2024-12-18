const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MonthView = ({
  currentDateOnDisplay,
  monthDatesToRender,
  currentDate,
}: {
  currentDateOnDisplay: boolean;
  monthDatesToRender: number[];
  currentDate: Date;
}) => {
  return (
    <div className="grid grid-cols-7 gap-[1px] bg-black p-[1px]">
      {days.map((day, index) => {
        return (
          <div key={index} className="truncate bg-gray-300 px-4 py-1">
            {day}
          </div>
        );
      })}
      {monthDatesToRender.map((date, index) => {
        return (
          <div
            key={index}
            className={`max-h-40 bg-gray-300 p-4 ${currentDateOnDisplay && date === currentDate.getDate() ? "bg-blue-300" : ""}`}
          >
            {date}
          </div>
        );
      })}
    </div>
  );
};

export default MonthView;
