import { hours } from "~/utils/globals";
import Hours from "./Hours";
import WeekDates from "./WeekDates";
import Weekdays from "./Weekdays";
import { filterDaysEvents, type Event } from "~/utils/fakeEvents";
import clsx from "clsx";

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
  const earliestDate = weekDatesToRender[0];
  const latestDate = weekDatesToRender[6];

  if (!earliestDate || !latestDate) {
    console.error(
      "An error occurred in WeekView.tsx: weekDatesToRender.length !== 7",
    );

    return (
      <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white">
        Error: See console.
      </div>
    );
  }
  const earliestYear = earliestDate.getFullYear();
  const latestYear = latestDate.getFullYear();
  const earliestMonth = earliestDate.getMonth();
  const latestMonth = latestDate.getMonth();

  const filteredEvents = events.filter((event) => {
    const eventYear = event.dateStart.getFullYear();
    const eventMonth = event.dateStart.getMonth();

    // Filter by year and month in one pass
    const isWithinYears =
      eventYear === earliestYear || eventYear === latestYear;

    const isWithinMonths =
      earliestYear === latestYear
        ? eventMonth === earliestMonth
        : eventMonth === earliestMonth || eventMonth === latestMonth;

    return isWithinYears && isWithinMonths;
  });

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
            const daysEvents = filterDaysEvents(date, filteredEvents);
            return (
              <div
                key={index}
                className={clsx(
                  "flex justify-center",
                  date.getMonth() === currentDate.getMonth() &&
                    date.getDate() === currentDate.getDate() &&
                    "bg-blue-300",
                )}
              >
                <div className="relative flex w-full flex-col overflow-auto border-l-[1px] bg-white">
                  {hours.map((hour) => (
                    <div key={hour} className="flex w-full">
                      <div className="h-[40px] w-full" />
                      <div className="absolute h-[1px] w-full bg-gray-300" />
                    </div>
                  ))}
                  {daysEvents.map((event, i) => {
                    const startHour = event.dateStart.getHours();
                    const startMinute = event.dateStart.getMinutes();
                    const endHour = event.dateEnd.getHours();
                    const endMinute = event.dateEnd.getMinutes();
                    const top = startHour * 40 + (startMinute / 60) * 40;
                    const height =
                      (endHour - startHour) * 40 +
                      ((endMinute - startMinute) / 60) * 40;

                    console.log(event.title, top, height);
                    return (
                      <div
                        key={event.id}
                        className={`absolute rounded-md border-[1px] border-blue-800 bg-blue-500 px-2 text-white`}
                        style={{
                          left: `${i * 15}%`,
                          top: `${top}px`,
                          height: `${height}px`,
                          width: `${85 - 15 * i}%`,
                          zIndex: index + 1,
                        }}
                      >
                        <p className="truncate">{event.title}</p>
                      </div>
                    );
                  })}
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
