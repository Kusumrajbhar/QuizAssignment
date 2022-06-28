import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Footer.scss"

function Footer(props) {
    const navigate = useNavigate();
    const exit = () => {
         navigate("/Thank-You")
    }

  return (
    <div className='footer'>      
         <span className='score'>{props.score}/20</span>  
         <button className='exit' onClick={exit}>Exit</button>
    </div>
  )
}

export default Footer