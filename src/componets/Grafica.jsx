import React, { useMemo,useEffect,useState } from "react";

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
import { getRegistros,moneyToListActividad } from "../helpers/fetch"

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


export default function BarChart(props) {

const scores = props.datos;
const labels = ["Aplicacion Fertilizante", "Desyerva", "Recoleccion", "Renovacion"];

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


  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Tipos de Labores",
          tension: 0.3,
          data: scores,
          borderColor: "#0a3ac1",
          backgroundColor: ["#001141","#002841","#00413E","#00411A"],
          borderWidth:0,
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