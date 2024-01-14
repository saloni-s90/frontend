import React from 'react'
import img from '../images/visual.jpg';
import './Header.css'
import { PiGraphBold } from "react-icons/pi";


// Header
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light header__nav">
                <div className="container-fluid">
                    <a className="navbar-brand main_header" href="#">
                        <img src={img} width="40" height="34" className="d-inline-block align-text-top img__disp" />
                        <span className='header_content'> Data visualization dashboard
                        
                        </span>
                        <PiGraphBold className='header__icon'/>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header
