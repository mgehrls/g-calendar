"use client";

import { useState } from "react";
import MonthView from "~/components/MonthView";
import WeekView from "~/components/WeekView";
import useDates from "~/utils/useDates";

type ViewEnum = "Day" | "Week" | "Month";

const DayView = () => {
  return <div>Day</div>;
};

export default function HomePage() {
  const [view, setView] = useState<ViewEnum>("Month");
  const [date, setDate] = useState(new Date(2024, 1, 15));
  const {
    monthDatesToRender,
    weekDatesToRender,
    month,
    currentDate,
    displayedMonth,
    displayedYear,
  } = useDates(date);
  const currentDateOnDisplay =
    displayedMonth === currentDate.getMonth() &&
    displayedYear === currentDate.getFullYear();

  function setDateToToday() {
    setDate(new Date());
  }
  function goBackOneUnit() {
    if (view === "Day") {
      setDate(new Date(date.setDate(date.getDate() - 1)));
    } else if (view === "Week") {
      setDate(new Date(date.setDate(date.getDate() - 7)));
    } else {
      setDate(new Date(date.setMonth(date.getMonth() - 1)));
    }
  }
  function goForwardOneUnit() {
    if (view === "Day") {
      setDate(new Date(date.setDate(date.getDate() + 1)));
    } else if (view === "Week") {
      setDate(new Date(date.setDate(date.getDate() + 7)));
    } else {
      setDate(new Date(date.setMonth(date.getMonth() + 1)));
    }
  }

  function handleViewChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value === "Day" || value === "Week" || value === "Month") {
      setView(value as ViewEnum);
    } else {
      console.error("Invalid view value selected in handleViewChange");
    }
  }

  const View = () => {
    switch (view) {
      case "Day":
        return <DayView />;
      case "Week":
        return (
          <WeekView
            weekDatesToRender={weekDatesToRender}
            currentDate={currentDate}
            currentDateOnDisplay={currentDateOnDisplay}
          />
        );
      case "Month":
        return (
          <MonthView
            monthDatesToRender={monthDatesToRender}
            currentDate={currentDate}
            currentDateOnDisplay={currentDateOnDisplay}
          />
        );
      default:
        return (
          <MonthView
            monthDatesToRender={monthDatesToRender}
            currentDate={currentDate}
            currentDateOnDisplay={currentDateOnDisplay}
          />
        );
    }
  };

  return (
    <main className="h-screen max-h-screen bg-gray-300 p-2">
      <div className="p- flex h-full max-h-full flex-col overflow-hidden bg-gray-100">
        <div className="flex items-center gap-4 bg-gray-200 p-2">
          <button
            onClick={() => setDateToToday()}
            aria-label={`Show me ${view === "Day" ? "todays" : `this ${view}s`} calendar.`}
          >
            Today
          </button>
          <button onClick={() => goBackOneUnit()}>{"<"}</button>
          <button onClick={() => goForwardOneUnit()}>{">"}</button>
          <h1>{`${month.name} ${displayedYear}`}</h1>
          {date.toDateString()}
          <select
            className="bg-gray-300 p-2"
            value={view}
            onChange={(e) => handleViewChange(e)}
          >
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
          </select>
        </div>
        <View />
      </div>
    </main>
  );
}
