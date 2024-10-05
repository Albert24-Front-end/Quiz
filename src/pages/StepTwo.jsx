import React, { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";


const StepTwo = () => {
  const navigate = useNavigate()
  const variants = [
    {
      variantId: "variant-1",
      variantText: "Front-end developer",
    },
    {
      variantId: "variant-2",
      variantText: "Python developer",
    },
    {
      variantId: "variant-3",
      variantText: "UX/UI designer",
    },
    {
      variantId: "variant-4",
      variantText: "Data analyst",
    },
  ];
  const [buttonError, setButtonError] = useState(true)
  const [courseVariant, setCourseVariant] = useState(null);
  useEffect(()=>{
    if(courseVariant === null) {
      localStorage.setItem("course", "")
      setButtonError(true)
    }
    else {
      localStorage.setItem("course", JSON.stringify(courseVariant))
      setButtonError(false)
    }
  }, [courseVariant]);

  //key={} - этот пропс пишется, когда по нескольким элементам масива проходится цикл callback функции
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2}/>
          <div className="question">
            <Header headerType="h2" headerText="2. На какой курс желаете записаться?"/>
            <ul className="variants">
              {variants.map((elem)=>(
                <AnswerItem 
                answerText={elem.variantText} 
                id={elem.variantId} 
                key={elem.variantId} 
                answerChange={()=>setCourseVariant(elem.variantText)}
                />
              ))} 
            </ul>
            <AppButton isDisabled={buttonError} id="next-btn" buttonClick={()=>navigate("/step-three")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
