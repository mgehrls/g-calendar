export type Event = {
    id: number;
    title: string;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    location: string;
    image: string;
}

type weekdayShort = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

type allDaysShort = weekdayShort | "Sat" | "Sun";

type WeekAvailability = {
    [key in weekdayShort]?: DayAvailability;
};

type DayAvailability = TimeSlot[]

type TimeSlot = {
    start: string;
    end: string;
    status: AvailabilityStatus;
}

type AvailabilityStatus = "preferred" | "unavailable";

