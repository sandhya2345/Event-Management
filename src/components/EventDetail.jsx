import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const foundEvent = storedEvents.find((e) => e.id === id);
    setEvent(foundEvent);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

   
    const isDuplicate = storedEvents.some(
      (e) => e.id !== event.id && e.date === event.date && e.venue === event.venue
    );

    if (isDuplicate) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        title: "An event with the same date and venue already exists.",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
       
      });
      return;
    }

    const updatedEvents = storedEvents.map((e) =>
      e.id === event.id ? event : e
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEditable(false);

    
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Event updated successfully!",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  if (!event) {
    return <p className="text-center mt-10 text-gray-600">Event not found.</p>;
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto mt-4 bg-white p-8 rounded">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Event Details</h2>
          <button
            onClick={() => (editable ? handleSave() : setEditable(true))}
            className={`px-4 py-2 rounded text-white ${
              editable
                ? "bg-green-500 hover:bg-green-600"
                : "bg-primary-dull hover:bg-blue-600"
            }`}
          >
            {editable ? "Save" : "Edit"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Title", name: "title" },
            { label: "Venue", name: "venue" },
            { label: "Date", name: "date" },
            { label: "Category", name: "category" },
            { label: "Type", name: "type" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={event[name]}
                onChange={handleChange}
                disabled={!editable}
                className={`w-full px-4 py-2 border border-gray-300 rounded ${
                  editable
                    ? "bg-white border-gray-300"
                    : "bg-gray-100 text-gray-500"
                }`}
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              disabled={!editable}
              className={`w-full px-4 py-2 border border-gray-300 rounded h-24 resize-none ${
                editable
                  ? "bg-white border-gray-300"
                  : "bg-gray-100 text-gray-500"
              }`}
            />
          </div>

          {event.image && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Preview
              </label>
              <img
                src={event.image}
                alt={event.title}
                className="rounded max-h-64 object-cover border border-gray-300"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
