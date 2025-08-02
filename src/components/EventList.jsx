import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const handleDelete = (idToDelete) => {
    const updatedEvents = events.filter((event) => event.id !== idToDelete);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const filteredEvents = events.filter((event) => {
    const now = new Date();
    const eventDate = new Date(event.date);

    if (filter === "upcoming") {
      return eventDate > now;
    } else if (filter === "past") {
      return eventDate < now;
    } else if (filter === "ongoing") {
      return eventDate.toDateString() === now.toDateString();
    }
    return true;
  });

  return (
    <div className="min-h-screen text-white py-20 px-6">
      <div className="max-w-6xl mt-4 mx-auto">
        <div className="text-center mb-10">
          {/* <h1 className="text-4xl font-bold text-white">Events</h1>
          <p className="text-lg text-white mt-2">Digital Event Showcase</p> */}

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {["all", "upcoming", "ongoing", "past"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-md border transition-all font-medium text-sm uppercase tracking-wide
                  ${
                    filter === type
                      ? "bg-white text-primary"
                      : "bg-transparent border-white text-white hover:bg-teal-500 hover:text-primary"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* --- EVENT GRID --- */}
        {filteredEvents.length === 0 ? (
          <p className="text-center mt-10 text-gray-400">No events found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredEvents.map(({ id, title, description, venue, date, image }) => {
              const eventDate = new Date(date);
              const day = eventDate.getDate();
              const month = eventDate.toLocaleString("default", { month: "short" });
              const year = eventDate.getFullYear();

              return (
                <div
                  key={id}
                  className="bg-white text-black rounded-md overflow-hidden flex flex-col hover:shadow-lg transition"
                >
                  <Link to={`/events/${id}`} className="flex-1 flex flex-col">
                    <div className="p-4 text-center bg-gray-100">
                      <p className="text-3xl font-bold">{day}</p>
                      <p className="uppercase text-sm tracking-widest">
                        {month} {year}
                      </p>
                    </div>

                    {image && (
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-40 object-cover"
                      />
                    )}

                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-1">{title}</h3>
                      <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                        {description}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        <strong>Venue:</strong> {venue}
                      </p>

              
                      <div className="mt-auto flex gap-2">
                        <Link
                          to={`/events/${id}`}
                          className="w-1/2 border border-gray-400 text-center text-gray-800 py-2 rounded hover:bg-gray-200 transition text-sm"
                        >
                          More Info
                        </Link>
                        <button
                          onClick={(e) => {
                            e.preventDefault(); 
                            handleDelete(id);
                          }}
                          className="w-1/2 bg-black text-white py-2 rounded hover:bg-red-700 transition text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;
