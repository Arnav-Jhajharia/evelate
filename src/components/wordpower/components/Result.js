import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "./../assets/bg.png";
import './../assets/css/result.css'
import { BASE_URL } from "../../../helpers/const/vars";
function Result() {
  const location = useLocation();
  const allAnswers = location.state.answers;
  const allQuestions = location.state.questions;
  const level = location.state.level;
  let percentile = 0;
  console.log(localStorage.getItem('jwt'))
  useEffect(() => {
async function lol() {
    if(level)
    {
       const userData = {
        level: level.toLowerCase(),
        };
        const response = await fetch(`${BASE_URL}/wordpower`, {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      
      body: JSON.stringify(userData),
    });
    }
  }
  lol()
  }, [])
  allAnswers.forEach((item) => {
    if (item.trueAnswer) {
      percentile += 1;
    }
  });

  return (
    <div className="result">
      <div className="result-box">
        <div className="result-bg">
          <span className="percentile">
            {Math.round((percentile / allQuestions.length) * 100)}%
          </span>
          <img src={Image} alt="result" />
        </div>
        <p className="result-detail">
          You answered {percentile} out of {allQuestions.length} questions
          correctly!
        </p>
        { (level == 'A1')?
         <Link to="/wordpower/quiz/A2" className="new-quiz">
          Congratulations! Now let's take it up a notch
        </Link>
        : (level == 'A2')?
        <Link to="/wordpower/quiz/A3" className="new-quiz">
          Now for the final level
        </Link> 
        :
         <Link to="/wordpower" className="new-quiz">
          And we're done!
        </Link> 
        }
       
      </div>
      <h2 className="check-answers-title">Check Correct Answers</h2>
      <div className="check-answers-boxes">
        {allQuestions.map((item, key) => {
          console.log();
          return (
            <div
              key={key}
              className={
                allAnswers[key].trueAnswer
                  ? "check-answer-box correct"
                  : "check-answer-box wrong"
              }
            >
              <div className="check-answer-top">
                <div className="check-texts">
                  <p className="check-answer-count">Question: {key + 1}</p>
                  <h3 className="check-answer-question">{item.question}</h3>
                </div>
                <div className="check-icon">
                  <i
                    className={
                      allAnswers[key].trueAnswer ? "bi bi-check" : "bi bi-x"
                    }
                  ></i>
                </div>
              </div>
              <div className="check-answer-bottom">
                <div className="answer-box">
                  <span className="answer-title">Your Answer</span>
                  <span className="answer-text">{allAnswers[key].answer}</span>
                </div>
                <div className="answer-box">
                  <span className="answer-title">Correct Answer</span>
                  <span className="answer-text">
                    {item.answers.map((ans) => {
                      return ans.trueAnswer ? ans.answer : null;
                    })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Result;
