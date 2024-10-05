import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerImg } from "../components/AnswerImg";
import { useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepThree = () => {
  const navigate = useNavigate()
  const [variantImg, setVariantImg]=useState(null);
  const [buttonError, setButtonError] = useState(true)
  useEffect(()=>{
    if(variantImg === null) {
      localStorage.setItem("text", "")
      setButtonError(true)
    }
    else {
      localStorage.setItem("text", JSON.stringify(variantImg))
      setButtonError(false)
    }
  }, [variantImg])
  // Пробные данные по шаблону
  const variants = [
    {
      variantImg: "./img/laugh.png",
      variantId: "variant-1",
      variantText: "весело",
      variantAlt: "laugh",
    },
    {
      variantImg: "./img/hearts.png",
      variantId: "variant-2",
      variantText: "нравится",
      variantAlt: "hearts",
    },
    {
      variantImg: "./img/smirk.png",
      variantId: "variant-3",
      variantText: "все по плечу",
      variantAlt: "smirk",
    },
    {
      variantImg: "./img/fright.png",
      variantId: "variant-4",
      variantText: "страшно",
      variantAlt: "fright",
    },
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar currentStep={3} />
          <div className="question">
          <Header headerType="h2" headerText="3. Какие эмоции Вы испытываете перед стартом курса?"/>
            <ul className="emoji-variants">
              {variants.map((elem, i)=>(
                <AnswerImg
                key={elem.variantId}
                answerAlt={elem.variantAlt} 
                answerId={elem.variantId}
                answerImg={elem.variantImg}
                answerText={elem.variantText}
                answerChange={()=>setVariantImg(elem.variantText)}/>
              ))}
              
            </ul>
            <AppButton isDisabled={buttonError} id="next-btn" buttonClick={()=>navigate("/step-four")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
