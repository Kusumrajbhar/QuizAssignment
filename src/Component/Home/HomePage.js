import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import "./HomePage.scss";
import { arrayContext } from "../../App";

function HomePage() {
  const [array, setArray] = useState([]);
  const navigate = useNavigate()
  let disable = false;

  const redirectToQuizPage = () => {
    navigate("/Quiz");
  };

  const { state,dispatch } = useContext(arrayContext);
  if(state.length==0) {
    disable = true;
  }

  const operatorArray = [`+`, `-`, `/`, `*`, `||`, `&&`, `%`, `^`,`<<`,`>>`];

  const selectValue = (e) => {
    dispatch({type:"add",payload: e.target.value});
  }
  
  return (
    <>
        <h2 className='Quize-heading'>Quizes</h2>
        <div>
       <div className='select-operator'>Select operators : </div> {operatorArray.map((item) => (
          <label className='check-label' key={item}> 
            {item}
          <input className='check-class' type="checkbox" value={item} onChange={selectValue}/>
          </label>
        ))
        }
        </div>
        <div className='outer-div'>
        <div className='first-quiz'>
        <button disabled={disable} className='start-quize-one' onClick={redirectToQuizPage}>Start Quiz</button>
        </div>
        <div className='second-quiz'>
        <button disabled={disable} className='start-quize-one'>Start Quiz</button>
        </div>
        </div>
    </>
  )
}

export default HomePage