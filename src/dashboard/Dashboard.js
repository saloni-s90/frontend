import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Tabsrow from './Tabsrow'


// Dashboard configuration with mongodb 
const Dashboard = () => {

  //to save server data
  const [mainData, setMainData] = useState([]);

  //fetch data from server and updating the state
  const getDataFromDB = async () => {
    try {
      const response = await axios.get("http://localhost:8000/all");
      setMainData(response.data.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  //immediate calling 
  useEffect(() => {
    getDataFromDB();
  }, [])

  return (
    <div>
      <Tabsrow data={mainData} setMainData={setMainData} />
    </div>
  )
}

export default Dashboard

