import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Component/Home/HomePage';
import QuizPage from './Component/QuizPage/QuizPage';
import { useReducer, createContext } from "react";
import ThankYouPage from './Component/ThankYouPage/ThankYouPage';

let initialState = [];
const reducer = (state, action) => {
switch(action.type) {
  case "add" : return [...state, action.payload] ;
  default: return state;
}
}

let initialScore = 0;
const scoreReducer = (state, action) => {
  switch(action.type) {
    case "score" : return state + 1 ;
    default: return state;
  }
}
export const arrayContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  const [scoreState, scoreDispatch] = useReducer(scoreReducer, initialScore); 
  return (
    <arrayContext.Provider value={{state,dispatch, scoreDispatch, scoreState}}>
    <Router>
    <div className="App">
      <Routes>
       <Route exact path="/" element={<HomePage />}/>
       <Route exact path="/Quiz" element={<QuizPage />} />
       <Route exact path="/Thank-You" element={<ThankYouPage />} />
      </Routes>
    </div>
    </Router>
    </arrayContext.Provider>
  );
}

export default App;
