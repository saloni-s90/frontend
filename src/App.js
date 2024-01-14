import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import DashboardFilters from "./Filter/DashboardFilters";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";

// using BrowserRouter to link url main file
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/filter" element={<DashboardFilters />}></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
