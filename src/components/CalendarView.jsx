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
    <div className="pt-24 px-4 sm:px-6 md:px-10 min-h-screen bg-primary">
      <div className="bg-white w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 rounded-md shadow-lg text-primary">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          height="auto"
          aspectRatio={1.5} // adjusts based on width
          contentHeight="auto"
          eventDisplay="block"
          eventContent={(arg) => {
            return {
              html: `
                <div style="
                  background-color: #1B7289;
                  color: white;
                  padding: 4px 8px;
                  font-size: 0.8rem;
                  border-radius: 4px;
                  overflow-wrap: break-word;
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
