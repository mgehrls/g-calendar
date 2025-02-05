import { workHours } from "~/utils/globals";
// TODO: reimplement constant for height
export default function WorkHours() {
  return (
    <div>
      {workHours.map((hour, index) => (
        <div key={hour} className="relative flex">
          <div className={`flex h-[120px] w-14 items-start justify-center`}>
            <p className="absolute -top-2 z-10 bg-white px-1 text-xs">
              {index > 0 && hour}
            </p>
          </div>
          <div className="absolute h-[1px] w-full bg-gray-300" />
        </div>
      ))}
    </div>
  );
}
