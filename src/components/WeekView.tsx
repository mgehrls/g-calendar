import { hours } from "~/utils/globals";
import Hours from "./Hours";
import WeekDates from "./WeekDates";
import Weekdays from "./Weekdays";
import { type Event } from "~/utils/fakeEvents";

const WeekView = ({
  events,
  currentDateOnDisplay,
  weekDatesToRender,
  currentDate,
}: {
  events: Event[];
  currentDateOnDisplay: boolean;
  weekDatesToRender: Date[];
  currentDate: Date;
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white">
      <div className="ml-14 flex flex-col py-4">
        <Weekdays />
        <WeekDates
          currentDate={currentDate}
          currentDateOnDisplay={currentDateOnDisplay}
          weekDatesToRender={weekDatesToRender}
        />
      </div>
      <div className="flex w-full overflow-y-scroll rounded-b-3xl bg-white">
        <Hours />
        <div className="grid w-full grid-cols-7 grid-rows-[auto]">
          {weekDatesToRender.map((date, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center ${date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate() ? "bg-blue-300" : ""}`}
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
