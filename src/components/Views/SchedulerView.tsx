import { schedulerHourSizeInPixels, workHours } from "~/utils/globals";

import clsx from "clsx";

import { SchedulerWeekDates, SchedulerWeekdays } from "../Scheduler";
import WorkHours from "../Scheduler/WorkHours";

const SchedulerView = ({
  currentDateOnDisplay,
  weekDatesToRender,
  currentDate,
}: {
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

  const justWeekDays = weekDatesToRender.filter(
    (day) => day.getDay() !== 0 && day.getDay() !== 6,
  );

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white">
      <div className="ml-14 flex flex-col py-4">
        <SchedulerWeekdays />
        <SchedulerWeekDates
          currentDate={currentDate}
          currentDateOnDisplay={currentDateOnDisplay}
          weekDatesToRender={weekDatesToRender}
        />
      </div>
      <div className="flex w-full overflow-y-scroll rounded-b-3xl bg-white">
        <WorkHours />
        <div className="grid w-full grid-cols-5 grid-rows-[auto]">
          {justWeekDays.map((date, index) => {
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
                  {workHours.map((hour) => (
                    <div key={hour} className="flex w-full">
                      <div
                        className={`h-[${schedulerHourSizeInPixels}px] w-full`}
                      />
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

export default SchedulerView;
