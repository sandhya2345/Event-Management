import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RecentActivity = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const eventCreationData = {
    labels,
    datasets: [
      {
        label: "Events Created",
        data: [3, 4, 2, 5, 1, 3, 4],
        borderColor: "#1B7289",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const userRegistrationData = {
    labels,
    datasets: [
      {
        label: "User Registrations",
        data: [5, 2, 6, 3, 7, 4, 5],
        backgroundColor: "#1B7289",
      },
    ],
  };

  return (
    <div className="min-h-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 bg-white">
      <h2 className="text-3xl md:text-4xl text-primary font-bold mb-10 text-center">
        Recent Activity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4  w-full">
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            Events Created This Week
          </h3>
          <div className="w-full">
            <Line data={eventCreationData} />
          </div>
        </div>

        <div className="bg-white p-4  w-full">
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            User Registrations This Week
          </h3>
          <div className="w-full">
            <Bar data={userRegistrationData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
