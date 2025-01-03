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
    <div className="flex h-full flex-col p-[1px] bg-gray-300 rounded-3xl">
      <div className="grid h-full grid-cols-7 grid-rows-[auto] overflow-auto gap-[1px] rounded-3xl">
        {monthDatesToRender.map((date, index) => {
          return (
            <div
              key={index}
              className={clsx("py-2 flex flex-col items-center bg-white text-xs", 
                currentDateOnDisplay && date === currentDate.getDate() ? "bg-blue-300" : "", 
                index === 0 && 'rounded-tl-3xl',
                index === 6 && 'rounded-tr-3xl',
                index === bottomLeft && 'rounded-bl-3xl',
                index === bottomRight && 'rounded-br-3xl')}
            >
              {index < 7 && <p>{getDaysShort(index)}</p>}
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
