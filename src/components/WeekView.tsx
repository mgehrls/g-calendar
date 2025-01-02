import { hours } from "~/utils/globals";
import Hours from "./Hours";
import WeekDates from "./WeekDates";
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
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white">
      <div className="ml-14 flex flex-col gap-2 py-4">
        <Weekdays />
        <WeekDates weekDatesToRender={weekDatesToRender} />
      </div>
      <div className="flex w-full overflow-y-scroll rounded-b-3xl bg-white">
        <Hours />
        <div className="grid w-full grid-cols-7 grid-rows-[auto]">
          {weekDatesToRender.map((date, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center ${currentDateOnDisplay && date === currentDate.getDate() ? "bg-blue-300" : ""}`}
              >
                <div className="flex w-full flex-col border-l-[1px] bg-white">
                  {hours.map((hour) => (
                    <div key={hour} className="relative flex w-full">
                      <div className="h-[40px] w-full" />
                      <div className="absolute h-[1px] w-full bg-gray-300" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeekView;
