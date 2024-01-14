import React from 'react'
import AccordionForCharts from './AccordionForCharts'
import Filters from './Filters'

const Tabsrow = ({ data, setMainData }) => {
    return (
        <div>
            <Filters setMainData={setMainData} />
            <AccordionForCharts data={data} />        
        </div>
    )
}

export default Tabsrow
