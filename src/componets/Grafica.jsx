import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5, 6, 4, 5];
const labels = ["Jan", "Feb", "March", "April", "May", "June", "July", "Agost", "Sep" , "Oct","Nov","Dec"];

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart(props) {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Meses",
          tension: 0.3,
          data: scores,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.titulo}</div>                                    
      </div>
      <div className="App">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}