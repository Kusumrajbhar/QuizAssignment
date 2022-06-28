import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ThankYou.scss";
import "../Footer/Footer.scss";
import Footer from '../Footer/Footer';

function ThankYouPage() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/");
    }
  return (
    <div className='main'>
        <h1 className='heading'>Thank You</h1>
        <div className='footer'>
            <button className='home-button' onClick={handleClick}>Home</button>
        </div>
    </div>
  )
}

export default ThankYouPage;