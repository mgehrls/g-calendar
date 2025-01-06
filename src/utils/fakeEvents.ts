export type Event = {
    id: number;
    title: string;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    location: string;
    image: string;
}

export const events: Event[] = [
    //previous year example
    {
        id: 1,
        title: "Event 1",
        description: "Description 1",
        dateStart: new Date(2024, 11, 31, 10, 0),
        dateEnd: new Date(2024, 11, 31, 12, 0),
        location: "Location 1",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Event 2",
        description: "Description 2",
        dateStart: new Date(2025, 0, 1, 11, 0),
        dateEnd: new Date(2025, 0, 1, 12, 0),
        location: "Location 2",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Event 3",
        description: "Description 3",
        dateStart: new Date(2025, 0, 1, 10, 0),
        dateEnd: new Date(2025, 0, 1, 12, 0),
        location: "Location 3",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        title: "Event 4",
        description: "Description 4",
        dateStart: new Date(2025, 1, 1, 10, 0),
        dateEnd: new Date(2025, 1, 1, 12, 0),
        location: "Location 4",
        image: "https://via.placeholder.com/150",
    }
]

export function filterDaysEvents(date: Date, monthsEvents: Event[]) {
  const targetDay = date.getDate();
  const targetMonth = date.getMonth();
  const targetYear = date.getFullYear();

  return monthsEvents.filter((event) => {
    const eventDate = event.dateStart;
    return (
      eventDate.getDate() === targetDay &&
      eventDate.getMonth() === targetMonth &&
      eventDate.getFullYear() === targetYear
    );
  }).sort((a, b) => a.dateStart.getTime() - b.dateStart.getTime());
  }

export function filterMonthsEvents(month: number, year: number, events: Event[]) {
    return events.filter((event) => event.dateStart.getMonth() === month && event.dateStart.getFullYear() === year);
  } 

export function filterThreeMonthsEvents(displayDateFull: Date, events: Event[]) {
    const month = displayDateFull.getMonth();
    const year = displayDateFull.getFullYear();

    function getMonthsArray() {
        if(month === 0) {
            return [11, 0, 1];
        } else if(month === 11) {
            return [10, 11, 0];
        } else {
            return [month - 1, month, month + 1];
        }
    }
    const monthsArray = getMonthsArray();
    let threeMonthsEvents: Event[] = [];
    monthsArray.forEach((month, index) => {
        if(index === 0 && month === 11) {
            threeMonthsEvents = threeMonthsEvents.concat(filterMonthsEvents(month, year - 1, events));
        } else if(index === 2 && month === 0) {
            threeMonthsEvents = threeMonthsEvents.concat(filterMonthsEvents(month, year + 1, events));     
        } else{
            threeMonthsEvents = threeMonthsEvents.concat(filterMonthsEvents(month, year, events));
        }
    });

    return threeMonthsEvents;
  }