import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepFour = () => {
  const navigate = useNavigate()
  const variants = [
    {
      variantId: "variant-1",
      variantText: "1",
    },
    {
      variantId: "variant-2",
      variantText: "2",
    },
    {
      variantId: "variant-3",
      variantText: "3",
    },
    {
      variantId: "variant-4",
      variantText: "4",
    },
    {
      variantId: "variant-5",
      variantText: "5",
    },
  ]
  const [gradeVariant, setGradeVariant] = useState(null);
  const [buttonError, setButtonError] = useState(true);
  useEffect(()=>{
    if(gradeVariant === null) {
      setButtonError(true)
      localStorage.setItem("grade", "")
    } else {
      setButtonError(false)
      localStorage.setItem("grade", JSON.stringify(gradeVariant))
    }
  }, [gradeVariant]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar currentStep={4}/>
          <div className="question">
          <Header headerType="h2" headerText="4. Насколько Вы готовы начать обучение в TEXNIKUM?"/>
            <ul className="level-variants">
              {variants.map((elem)=>(
                <AnswerItem
                key={elem.variantId}
                id={elem.variantId}
                answerText={elem.variantText}
                answerChange={()=>setGradeVariant(elem.variantText)}/>
              ))}
            </ul>
            <AppButton isDisabled={buttonError} id="next-btn" buttonClick={()=>navigate("/thanks")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
