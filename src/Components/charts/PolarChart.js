import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

//Polarchart displays data of Intensity,Topics,Region,Country,Likelihood,Relevance
const PolarChart = ({ serverData }) => {

    //intensity
    let uniqueIntensity = [];
    //using forEach because it doesn't return any array
    serverData.forEach((i) => {
        if (!uniqueIntensity.includes(i.intensity) && i.intensity !== "") {
            uniqueIntensity.push(i.intensity);
        }
    })

    //topic
    let uniqueTopics = [];
    serverData.forEach((i) => {
        if (!uniqueTopics.includes(i.topic) && i.topic !== "") {
            uniqueTopics.push(i.topic);
        }
    })

    // Region
    let uniqueRegion = [];
    serverData.forEach((i) => {
        if (!uniqueRegion.includes(i.region) && i.region !== "") {
            uniqueRegion.push(i.region);
        }
    })

    // Country
    let uniqueCountry = [];
    serverData.forEach((i) => {
        if (!uniqueCountry.includes(i.country) && i.country !== "") {
            uniqueCountry.push(i.country);
        }
    })

// likelihood
    let uniqueLikelihood = [];
    serverData.forEach((i) => {
        if (!uniqueLikelihood.includes(i.likelihood) && i.likelihood !== "") {
            uniqueLikelihood.push(i.likelihood);
        }
    })

    //Relevance
    let uniqueRelevance = [];
    serverData.forEach((i) => {
        if (!uniqueRelevance.includes(i.relevance) && i.relevance !== "") {
            uniqueRelevance.push(i.relevance);
        }
    })

    const label = ["Country", "Region", "Likelihood", "Topic", "Intensity", "Relevance"];

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <PolarArea
                data={{
                    labels: label,
                    datasets: [
                        {
                            label: "Total: ",
                            data: [uniqueCountry.length, uniqueRegion.length, uniqueLikelihood.length, uniqueTopics.length, uniqueIntensity.length, uniqueRelevance.length],
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
                            gridLines : {
                                display : false,
                            } 

                        },
                    }
                }}
                height={300}
            />
        </div>
    )
}

export default PolarChart


