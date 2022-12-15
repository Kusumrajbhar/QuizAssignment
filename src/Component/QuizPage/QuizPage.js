import React, { useEffect, useState, useContext, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./QuizPage.scss";
import "../Home/HomePage.scss"
import {arrayContext } from "../../App";

function QuizPage() {
  const {state, dispatch, scoreState, scoreDispatch} = useContext(arrayContext);
   const [firstDigit,setFirstDigit] = useState();
   const [secondDigit, setSecondDigit] = useState();
   const [operator, setOperator] = useState();
   const [questionNumber, setQuestionNumber] = useState(1);
   const [userAnswer, setUserAnswer] = useState('');
   const [score, setScore] = useState(0);
   const operatorArray = state;
   let nextButton = "Next";
   const navigate = useNavigate();

   const firstValue = Math.floor( Math.random()*10);
   const secondValue = Math.floor( Math.random()*10);
   const selectedOperator =operatorArray[Math.floor( Math.random()*operatorArray.length)]; //operator[2]

   useEffect(() => {
     setFirstDigit(firstValue);
     setSecondDigit(secondValue);
     setOperator(selectedOperator);
     setInterval(nextQuestion, 20000);
     
    }, [questionNumber]);
    
    const userEnteredAnswer = (e) => {
    setUserAnswer(e.target.value);
    }

    const operatorFunction = (first, second, data) => {
      switch(data) {
        case "+" : return first + second;
        break;
        case "-" : return first - second;
        break;
        case "/" : return first / second;
        break;
        case "*" : return first * second;
        break;
        case "&&" : return first && second;
        break;
        case "||" : return first || second;
        break;
        case "%" : return first % second;
        break;
        case "^" : return first ^ second;
        break;
        case "<<" : return first << second;
        break;
        case ">>" : return first >> second;
        break;
        case "**" : return first ** second;
        break;
      } 
    }

    
    function nextQuestion(){
    if(nextButton == "Next") {
      const result =Math.ceil(operatorFunction(firstDigit, secondDigit, operator));
      result && userAnswer && (result == userAnswer) &&  scoreDispatch({type: "score"});  
      console.log('userAnswer', userAnswer);
      console.log('result', result);
         setUserAnswer('');
         setQuestionNumber(questionNumber + 1);
         
    } else 
    if(nextButton == "Finish") {
      navigate("/Thank-You")
    }
    };
    
    if(questionNumber == 20) {
      nextButton = "Finish";
    }

  return (
    <div>  
    <div className='Quize-heading'>QuizPage</div>
    <div>
    <p className='main-quiz-page'>

        <span className='question-number'>Q.{questionNumber} </span>
        <button className='first-digit'>{firstDigit}</button> 
        <span className='operator'>{operator} </span>
        <button className='first-digit'>{secondDigit}</button>
        <span className='operator'> = </span>
        <input 
        className='user-input'
        type="text" 
        onChange={userEnteredAnswer} 
        value={userAnswer} 
        placeholder=" Answer"
        />
    </p>
    {/* <h2>{`${firstDigit} ${selectedOperator} ${secondDigit}`}</h2>
    <h2>{6 + 6}</h2> */}
    <button className='next-button' onClick={nextQuestion}>{nextButton}</button>
    </div>
    <Footer score={scoreState}/>
    </div>
  )
}

export default memo(QuizPage);