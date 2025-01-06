import { months } from "./globals";

export default function useDates(date: Date) {

    const displayedDateFull = new Date(date);
    const currentDate = new Date();
    const displayedYear = displayedDateFull.getFullYear();
    const displayedMonth = displayedDateFull.getMonth();
    const displayedDate = displayedDateFull.getDate();
    const month = months[displayedMonth] ? months[displayedMonth] : { name: 'Something went wrong', short: '' };
    const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
    const firstOfMonthWeekday = new Date(displayedYear, displayedMonth, 1).getDay();
    const displayDateWeekday = displayedDateFull.getDay();
    const lastMonthDays = new Date(displayedYear, displayedMonth, 0).getDate();
    const goingToLastMonth = displayedDate - displayDateWeekday < 1;
    const goingToLastYear = displayedMonth === 0 && goingToLastMonth;
    const goingToNextMonth = displayedDate - displayDateWeekday + (7 - displayDateWeekday +1) > daysInMonth;
    const goingToNextYear = displayedMonth === 11 && goingToNextMonth;
    
    const monthDatesToRender = getMonthDatesToDisplay();
    const weekDatesToRender = getWeekDatesToDisplay();

    function getWeekDatesToDisplay() {
        if(goingToLastMonth) {
            const firstDateOfMonthsWeekday = new Date(displayedYear, displayedMonth, 1).getDay();
            const lastMonthDates = Array.from({ length: firstDateOfMonthsWeekday }).map((_, index) => {
                return new Date(goingToLastYear ? displayedYear -1 : displayedYear, goingToLastYear ? 11 : displayedMonth -1,  lastMonthDays - firstDateOfMonthsWeekday + index + 1);
            });
            return [...lastMonthDates, ...Array.from({ length: 7 - firstDateOfMonthsWeekday }).map((_, index) => {
                return new Date(displayedYear, displayedMonth, index + 1);
            })];
        }else if(goingToNextMonth) {
            const lastDateOfMonthsWeekday = new Date(displayedYear, displayedMonth + 1, 0).getDay() + 1;
            const daysToAdd = 7 - lastDateOfMonthsWeekday;
            const nextMonthDates = Array.from({ length: daysToAdd }).map((_, index) => {
                return new Date(goingToNextYear ? displayedYear + 1 : displayedYear, goingToNextYear ? 0 : displayedMonth + 1, index + 1);
            });
            return [...Array.from({ length: 7 - daysToAdd }).map((_, index) => {
                return new Date(displayedYear, displayedMonth, displayedDateFull.getDate() - displayDateWeekday + index);
            }), ...nextMonthDates];
        }else{
            return Array.from({ length: 7 }).map((_, index) => {
                return new Date(displayedYear, displayedMonth, displayedDateFull.getDate() - displayDateWeekday + index);
        });
    }
}
  
    function getMonthDatesToDisplay() {
      let dates = Array.from({ length: daysInMonth }).map((_, index) => {
        return new Date(displayedYear, displayedMonth, index + 1);
      });
  
      if (firstOfMonthWeekday > 0) {
        const daysToAdd = firstOfMonthWeekday;
        const lastMonthDates = Array.from({ length: daysToAdd }).map(
          (_, index) => {
            return new Date(goingToLastYear ? displayedYear - 1 : displayedYear, goingToLastYear ? 11 : displayedMonth - 1, lastMonthDays - daysToAdd + index + 1);
          },
        );
  
        dates = [...lastMonthDates, ...dates];
      }
  
      if (dates.length % 7 !== 0) {
        const daysToAdd = 7 - (dates.length % 7);
        const nextMonthDates = Array.from({ length: daysToAdd }).map(
          (_, index) => {
            return new Date(goingToNextYear ? displayedYear + 1 : displayedYear, goingToNextYear ? 0 : displayedMonth +1, index + 1);
          },
        );
  
        dates = [...dates, ...nextMonthDates];
      }
  
      return dates;
    }

    return {
        monthDatesToRender,
        weekDatesToRender,
        displayedDate,
        displayedMonth,
        displayedYear,
        currentDate,
        displayedDateFull,
        month,
    }
}