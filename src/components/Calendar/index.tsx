// components/Calendar.tsx

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
// import { DateClickArg } from "@fullcalendar/core";

const Calendar = () => {
  // Function to update CSS content dynamically
  const updateCSSContent = (newContent: string) => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = newContent;
    document.head.appendChild(styleElement);
  };
  const [range, setRange] = useState({ min: "", max: "" });

  // Example new CSS content
  const newCSSContent = `
    td [data-date="2024-04-09"] {
        background-color: #34C5F3!important;
    }
    td [data-date="2024-04-10"] {
        background-color: #31444A!important;
    }
    td [data-date="2024-04-11"] {
        background-color: #31444A!important;
    }
    td [data-date="2024-04-12"] {
        background-color: #31444A!important;
    }
    td [data-date="2024-04-13"] {
        background-color: #34C5F3!important;
    }
  `;

  const handleDayClick = (info: any) => {
    console.log("Clicked on: " + info.dateStr);
    const day = info.dateStr;
    if (range.min && day < range.min) {
      setRange({ min: day, max: range.min });
      return 0;
    }
    if (range.max && day > range.min) {
      setRange({ min: range.max, max: day });
      return 0;
    }
  };
  const CalHeader = ({ des, value }: { des: String; value: String }) => {
    return (
      <div className="flex flex-col text-white">
        <div className="text-[18px]">{des}</div>
        <div className="text-[18px] font-medium">{value}</div>
      </div>
    );
  };
  // Call the function with the new CSS content
  updateCSSContent(newCSSContent);
  return (
    <div className="bg-[#222222] p-[30px] rounded-[12px] flex flex-col w-full">
      <div className="text-[24px] font-bold  whitespace-nowrap text-white mb-4">
        Réservez votre séance d’essai
      </div>
      <div className="rounded-[16px] border-[#47494B] border-[1px] flex flex-col">
        <div className="flex justify-between py-4 border-b-[1px] border-b-[#47494B]">
          <div className="ml-4">
            <CalHeader des="Date" value="15 Avril 2024" />
          </div>
          <div className="mr-4">
            <CalHeader des="Date" value="15 Avril 2024" />
          </div>
        </div>
        <div className="p-4">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev month",
              //   left: "prev,next month",
              center: "title",
              right: "next month",
            }}
            // eventColor="blue" // Customize event color
            height="auto"
            dateClick={handleDayClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
