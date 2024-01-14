import React from 'react'
import Likelihood from '../Components/likelihood/Likelihood';
import Country from '../Components/Country/Country';
import Region from '../Components/region/Region';
import Topic from '../Components/topic/Topic';
import Intensity from '../Components/Intensity';
import './AccordionForCharts.css'
import DonutChart from '../Components/charts/DonutChart';
import RadarChart from '../Components/charts/RadarChart';
import PolarChart from '../Components/charts/PolarChart';

// dashboard design for all graph it take props from parent
const AccordionForCharts = ({ data }) => {
    return (
        <div className='container__data'>

            <div className="data__header">
                Pie Chart of Intensity,Relevance,Likelihood
                &emsp; &emsp;
                Bar Chart of Likelihood
                &emsp; &emsp;&emsp;&emsp;
                &emsp; &emsp;&emsp;&emsp;
                &emsp; &emsp;
                Pie Chart of Country
            </div>
            <div className='graph_display'>
                <Intensity serverData={data} />
                <Likelihood serverData={data} />
                <Country serverData={data} />
            </div>


            <div className="data__header">
                Radar Chart of Pestal
                &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;
                &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;
                &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;
                Radar Chart of Country,Intensity,Relevance,Likelihood,Region,Topics
            </div>

            <div className='graph_display'>
                <RadarChart serverData={data} />

                <PolarChart serverData={data} />
            </div>

            <div className="data__header">
                Doughnut Chart of Country,Sector,Topic,Region,Source,Pestle
                &emsp; &emsp;
                &emsp; &emsp;
                &emsp; &emsp;
                Doughnut Chart of Region/City
            </div>
            <div className='graph_display'>
                <DonutChart serverData={data} />

                <Region serverData={data} />
            </div>

            <div className="data__header">
                Bar Chart of Topics
            </div>
            <div className='graph_display1'>
                <Topic serverData={data} />

            </div>
        </div>
    )
}

export default AccordionForCharts

