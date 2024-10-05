import React, { useEffect, useState } from "react";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { AppInput } from "../components/AppInput";


const StepOne = () => {

  const [answer, setAnswer] = useState("")
  const [answerError, setAnswerError] = useState(false)
  const [buttonError, setButtonError] = useState(true)

  const navigate = useNavigate()
  const regexAnswer = /^[A-Za-zА-Яа-яЁё]+$/;

  const handleClick =()=> {
    if(!regexAnswer.test(answer)) {
      setAnswerError(true)
    }
    else {setAnswerError(false)
    navigate("/step-two")
    localStorage.setItem("userAnswer", JSON.stringify(answer))
  }
  };

  useEffect(() => {
    answer.length > 0
    ? setButtonError(false)
    : setButtonError(true);
  }, [answer])



  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1}/>
          <div className="question">
          <Header headerType="h2" headerText="1. Имеется ли у Вас опыт в каком-либо IT-направлении?"/>
            <label className="input-wrapper">
            <AppInput
                errorText="Введите ответ в правильном формате"
                inputPlaceholder="Ваш ответ"
                inputType = "text"
                inputValue = {answer}
                inputChange={setAnswer}
                hasError={answerError}/>
            </label>
              <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
