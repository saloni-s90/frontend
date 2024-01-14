import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


// Pie Chart is used to display graph of Likelihood,Relevance,Intensity

const Intensity = ({ serverData }) => {

  // likelihood
  let uniqueLikelihood = [];
  serverData.forEach((i) => {
    if (!uniqueLikelihood.includes(i.likelihood) && i.likelihood !== "") {
      uniqueLikelihood.push(i.likelihood);
    }
  })

  //relevance
  let uniqueRelevance = [];
  serverData.forEach((i) => {
    if (!uniqueRelevance.includes(i.relevance) && i.relevance !== "") {
      uniqueRelevance.push(i.relevance);
    }
  })


  //intensity
  let uniqueIntensity = [];
  //using forEach because it doesn't return any array
  serverData.forEach((i) => {
    if (!uniqueIntensity.includes(i.intensity) && i.intensity !== "") {
      uniqueIntensity.push(i.intensity);
    }
  })

  const label = [ "Likelihood", "Intensity", "Relevance"];


  return (
    <div>
      <Pie
        data={{
          labels: label,

          datasets: [
            {
                label: "Total: ",
                data: [ uniqueLikelihood.length, uniqueIntensity.length, uniqueRelevance.length],
                borderWidth: 2,
                hoverOffset: 15,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ]
            },
        ]
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,         
            },
   
          }
        }}
        height={300}

      />
    </div>
  )
}

export default Intensity