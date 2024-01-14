import React, { useEffect, useState } from 'react'
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import './DashboardFilters.css'

// All Filters are display using Ag-grid
const DashboardFilters = () => {

  const [tableData, setTableData] = useState(null)

    const url = `http://localhost:8000/view`


    useEffect(() => {
        getUsers()
      }, [])
    
      const getUsers = () => {
        fetch(url).then(resp => resp.json()).then(resp => setTableData(resp))
      }
    
      const defaultColDef = {
        sortable: true, filter: true, floatingFilter: true, flex: 1
      }


    const column = [
        {
          headerName: "ID", field: '_id', checkboxSelection: true
        },
        {
          headerName: "END_YEAR", field: 'start_year'
        },
        {
          headerName: "TOPIC", field: 'topic'
        },
        {
          headerName: "SECTOR", field: 'sector'
        },
        {
          headerName: "CITY ", field: 'region'
        },
        {
          headerName: "PESTLE", field: 'pestle'
        },
        {
          headerName: "SOURCE", field: 'source'
        },
        {
          headerName: "COUNTRY", field: 'country'
        }
      ]
  return (
   <div className="ag-theme-alpine filter__container" >
    <div className= "filter__text">
     <h4> FILTERS </h4>
    </div>
      <AgGridReact 
        rowData={tableData}
        columnDefs={column}
        defaultColDef={defaultColDef}
        pagination={true}
      />
    </div>
  )
}

export default DashboardFilters
