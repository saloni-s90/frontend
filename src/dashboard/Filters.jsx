import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import './Filter.css'

// Filter the year for all the graph
const Filters = ({ setMainData }) => {

    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
    };
    // func to fetch the filtered data by year and update the state
    const getDataFromDB = async (year) => {
        try {
            const response = await axios.get(`http://localhost:8000/year/${year}`);
            setMainData(response.data.data)
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        // <div className='tabsClass' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <div className='Filter_opts'>
            <Dropdown onSelect={handleSelect}>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter By Year
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item eventKey="2" >2015</Dropdown.Item>
                    <Dropdown.Item eventKey="3" >2016</Dropdown.Item>
                    <Dropdown.Item eventKey="4" >2017</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default Filters
