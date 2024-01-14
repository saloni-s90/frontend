import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


// Countries are display using pie charts
const Country = ({ serverData }) => {

  let uniqueSectors = [];

  //using forEach because it doesn't return any array and we are adding unique sector names to an array
  serverData.forEach((i) => {
    if (!uniqueSectors.includes(i.country) && i.country !== "") {
      uniqueSectors.push(i.country);
      console.log(uniqueSectors);
    }
  })

  // counting the total number of projects in each sector uniquely
  const sectorCount = uniqueSectors.map((item) => {
    return {
      sector: item,
      count: serverData.filter((i) => i.country === item).length

    }
  })



  return (

    <div style={{ height: '50vh', width: '35vw' }}>
      <Pie
        data={{
          labels: uniqueSectors.map(e => e),
          datasets: [
            {
              label: 'Total Projects',
              data: sectorCount.map(e => e.count),
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

export default Country
