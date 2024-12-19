import { months } from "./globals";

export default function useDates(date: Date) {

    const displayedDate = new Date(date);
    const currentDate = new Date();
    const displayedMonth = displayedDate.getMonth();
    const month = months[displayedMonth] ? months[displayedMonth] : { name: 'Something went wrong', short: '' };
    const displayedYear = displayedDate.getFullYear();
    const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
    const firstOfMonthWeekday = new Date(displayedYear, displayedMonth, 1).getDay();
    const displayDateWeekday = displayedDate.getDay();
    const lastMonthDays = new Date(displayedYear, displayedMonth, 0).getDate();
    const monthDatesToRender = getMonthDatesToDisplay();
    const weekDatesToRender = getWeekDatesToDisplay();
    console.log(weekDatesToRender)

    function getWeekDatesToDisplay() {
        // get the first day of the week by figuring out how many days to subtract from the current date
        // will you be going outside of the current month in this week?
        // if not, then you can just subtract the current day of the week from the current date and for loop to add 7 days
        // if yes, are you going to last month or next month?
        const goingToLastMonth = displayedDate.getDate() - displayDateWeekday < 1;
        const goingToNextMonth = displayedDate.getDate() - displayDateWeekday + (7 - displayDateWeekday +1) > daysInMonth;

        if(goingToLastMonth) {
            const firstDateOfMonthsWeekday = new Date(displayedYear, displayedMonth, 1).getDay();
            const lastMonthDates = Array.from({ length: firstDateOfMonthsWeekday }).map((_, index) => {
                return lastMonthDays - firstDateOfMonthsWeekday + index + 1;
            });
            return [...lastMonthDates, ...Array.from({ length: 7 - firstDateOfMonthsWeekday }).map((_, index) => {
                return index + 1;
            })];
        }else if(goingToNextMonth) {
            const lastDateOfMonthsWeekday = new Date(displayedYear, displayedMonth + 1, 0).getDay() + 1;
            const daysToAdd = 7 - lastDateOfMonthsWeekday;
            const nextMonthDates = Array.from({ length: daysToAdd }).map((_, index) => {
                return index + 1;
            });
            return [...Array.from({ length: 7 - daysToAdd }).map((_, index) => {
                return displayedDate.getDate() - displayDateWeekday + index;
            }), ...nextMonthDates];
        }else{
            return Array.from({ length: 7 }).map((_, index) => {
                return displayedDate.getDate() - displayDateWeekday + index;
        });
    }
}
  
    function getMonthDatesToDisplay() {
      let dates = Array.from({ length: daysInMonth }).map((_, index) => {
        return index + 1;
      });
  
      if (firstOfMonthWeekday > 0) {
        const daysToAdd = firstOfMonthWeekday;
        const lastMonthDates = Array.from({ length: daysToAdd }).map(
          (_, index) => {
            return lastMonthDays - daysToAdd + index + 1;
          },
        );
  
        dates = [...lastMonthDates, ...dates];
      }
  
      if (dates.length % 7 !== 0) {
        const daysToAdd = 7 - (dates.length % 7);
        const nextMonthDates = Array.from({ length: daysToAdd }).map(
          (_, index) => {
            return index + 1;
          },
        );
  
        dates = [...dates, ...nextMonthDates];
      }
  
      return dates;
    }

    return {
        monthDatesToRender,
        weekDatesToRender,
        displayedMonth,
        displayedYear,
        currentDate,
        displayedDate,
        month,
    }
}