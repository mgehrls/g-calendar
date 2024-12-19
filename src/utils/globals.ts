export const months = [
    { name: 'January', short: 'Jan' },
    { name: 'February', short: 'Feb' },
    { name: 'March', short: 'Mar' },
    { name: 'April', short: 'Apr' },
    { name: 'May', short: 'May' },
    { name: 'June', short: 'Jun' },
    { name: 'July', short: 'Jul' },
    { name: 'August', short: 'Aug' },
    { name: 'September', short: 'Sep' },
    { name: 'October', short: 'Oct' },
    { name: 'November', short: 'Nov' },
    { name: 'December', short: 'Dec' },
]

export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

export const hours = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
]

export const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getDaysShort(index: number) {

    const day = daysShort[index];

    if(day === undefined) {
        return 'error';
    }else{
        return day;
    }
}