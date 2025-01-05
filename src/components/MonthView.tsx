import clsx from "clsx";
import { getDaysShort } from "~/utils/globals";

const MonthView = ({
  currentDateOnDisplay,
  monthDatesToRender,
  currentDate,
}: {
  currentDateOnDisplay: boolean;
  monthDatesToRender: number[];
  currentDate: Date;
}) => {
  const bottomLeft = monthDatesToRender.length - 7;
  const bottomRight = monthDatesToRender.length - 1;
  return (
    <div className="flex h-full flex-col rounded-3xl bg-gray-300 p-[1px]">
      <div className="grid h-full grid-cols-7 grid-rows-[auto] gap-[1px] overflow-auto rounded-3xl">
        {monthDatesToRender.map((date, index) => {
          const notCurrentMonth =
            (date > 20 && index < 7) || (date < 10 && index > 20);
          return (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center bg-white py-2 text-xs",
                currentDateOnDisplay && date === currentDate.getDate()
                  ? "bg-blue-300"
                  : "",
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
                  currentDateOnDisplay && date === currentDate.getDate()
                    ? "rounded-full bg-blue-500 text-white"
                    : "",
                )}
              >
                {date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
