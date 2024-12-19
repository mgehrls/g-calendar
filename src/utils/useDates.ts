import { months } from "./globals";

export default function useDates(date: Date) {

    const displayedDate = new Date(date);
    const currentDate = new Date();
    const displayedMonth = displayedDate.getMonth();
    const month = months[displayedMonth] ? months[displayedMonth] : { name: 'Something went wrong', short: '' };
    const displayedYear = displayedDate.getFullYear();
    const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
    const firstDay = new Date(displayedYear, displayedMonth, 1).getDay();
    const lastMonthDays = new Date(displayedYear, displayedMonth, 0).getDate();
    const monthDatesToRender = getDatesToDisplay();
    const displaysLastMonth = firstDay > 0;
    const displaysNextMonth = monthDatesToRender.length % 7 !== 0;
  
    function getDatesToDisplay() {
      let dates = Array.from({ length: daysInMonth }).map((_, index) => {
        return index + 1;
      });
  
      if (firstDay > 0) {
        console.log('last month days', lastMonthDays);
        const daysToAdd = firstDay;
        const lastMonthDates = Array.from({ length: daysToAdd }).map(
          (_, index) => {
            return lastMonthDays - daysToAdd + index + 1;
          },
        );
        console.log("last month dates", lastMonthDates);
  
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
        displayedMonth,
        displayedYear,
        currentDate,
        displayedDate,
        displaysLastMonth,
        displaysNextMonth,
        month,
    }
}