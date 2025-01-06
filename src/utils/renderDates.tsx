import { type Event } from "../utils/fakeEvents";

export function renderDaysEvents(events: Event[]) {
  return events.map((event, i) => {
    const startHour = event.dateStart.getHours();
    const startMinute = event.dateStart.getMinutes();
    const endHour = event.dateEnd.getHours();
    const endMinute = event.dateEnd.getMinutes();
    const top = startHour * 40 + (startMinute / 60) * 40;
    const height =
      (endHour - startHour) * 40 + ((endMinute - startMinute) / 60) * 40;

    return (
      <div
        key={event.id}
        className={`absolute rounded-md border-[1px] border-blue-800 bg-blue-500 px-2 text-white`}
        style={{
          left: `${i * 15}%`,
          top: `${top}px`,
          height: `${height}px`,
          width: `${85 - 15 * i}%`,
          zIndex: i + 1,
        }}
      >
        <p className="truncate">{event.title}</p>
      </div>
    );
  });
}
