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

const datos= [1,2,3,4,5,6,7,8,9,10,11,12]

const scores = [...datos];
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
          borderColor: "#0a3ac1",
          backgroundColor: "#37c0f0",
          borderWidth:5,
          borderRadius:20
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
      <div className="App w-[95%] mx-auto  bg-[#f69775]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}