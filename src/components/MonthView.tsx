import clsx from "clsx";
import { getDaysShort } from "~/utils/globals";
import {
  filterDaysEvents,
  filterThreeMonthsEvents,
  type Event,
} from "~/utils/fakeEvents";

const MonthView = ({
  events,
  monthDatesToRender,
  displayedDateFull,
  currentDate,
}: {
  events: Event[];
  monthDatesToRender: Date[];
  displayedDateFull: Date;
  currentDate: Date;
}) => {
  const bottomLeft = monthDatesToRender.length - 7;
  const bottomRight = monthDatesToRender.length - 1;

  const eventsToDisplay = filterThreeMonthsEvents(displayedDateFull, events);

  return (
    <div className="flex h-full flex-col rounded-3xl bg-gray-300 p-[1px]">
      <div className="grid h-full auto-rows-[minmax(0,_1fr)] grid-cols-7 gap-[1px] overflow-auto rounded-3xl">
        {monthDatesToRender.map((date, index) => {
          const notCurrentMonth =
            (date.getDate() > 20 && index < 7) ||
            (date.getDate() < 10 && index > 20);
          const daysEvents = filterDaysEvents(date, eventsToDisplay);
          return (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center bg-white py-2 text-xs",
                notCurrentMonth && "bg-gray-100 text-gray-500",
                index === 0 && "rounded-tl-3xl",
                index === 6 && "rounded-tr-3xl",
                index === bottomLeft && "rounded-bl-3xl",
                index === bottomRight && "rounded-br-3xl",
              )}
            >
              {index < 7 && <p>{getDaysShort(index)}</p>}
              <p
                className={clsx(
                  "flex size-6 items-center justify-center",
                  date.getMonth() === currentDate.getMonth() &&
                    date.getDate() === currentDate.getDate()
                    ? "rounded-full bg-blue-500 text-white"
                    : "",
                )}
              >
                {date.getDate()}
              </p>
              {daysEvents.map((event) => {
                return (
                  <div
                    key={event.id}
                    className="flex w-full items-center rounded-md bg-blue-500 px-2 text-white"
                  >
                    <p className="truncate">{event.title}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
