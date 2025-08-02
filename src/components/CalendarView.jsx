import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEventContext } from "../context/EventContext";
import Swal from "sweetalert2";

export const CalendarView = () => {
  const { events } = useEventContext();

  const calendarEvents = events.map((event) => ({
    id: event.id,
    title: event.title,
    start: event.date,
    description: event.description,
    venue: event.venue,
  }));

  return (
    <div className="pt-24 px-4 min-h-screen bg-primary">
      {/* <h1 className="text-3xl font-bold mb-2 text-center text-white">Event Calendar</h1> */}
       <p className="text-center text-gray-100 mb-6 max-w-2xl mx-auto">
    Welcome to the event calendar! Here you can find upcoming events and important details. Click any event for more information.
  </p>
      <div className="bg-white max-w-5xl mx-auto p-4 text-primary">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          height="auto"
          eventContent={(arg) => {
            return {
              html:
                `<div style="
        background-color: #1B7289;
        color: white;
        padding: 4px 8px;
        ">
        ${arg.event.title}
      </div>`,
            };
          }}
          eventClick={(info) => {
            Swal.fire({
              title: info.event.title,
              html: `
        <p><strong>Date:</strong> ${info.event.startStr}</p>
        <p><strong>Venue:</strong> ${info.event.extendedProps.venue}</p>
        <p><strong>Description:</strong> ${info.event.extendedProps.description}</p>
      `,
              icon: "info",
              confirmButtonText: "Close",
              customClass: {
                popup: "text-left",
              },
            });
          }}
        />
      </div>
    </div>
  );
};
