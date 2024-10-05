import React, { useEffect, useState } from "react";
import { Header } from "../components/Header"
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [buttonError, setButtonError] = useState(true);

  const navigate = useNavigate()

  const regexName = /^[A-Za-zА-Яа-яЁё]+$/;
  const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/;

 //Валидация и активация кнопки перехода на след стр

  const handleClick = () => {
    if (!regexName.test(name)) { // .test - метод для проверки состояния name на соответствие regexName
      setNameError(true)
    } else if (!regexNum.test(phone)) {
      setPhoneError(true)
    } else {
      setNameError(false)
      setPhoneError(false)
      navigate("/step-one")
      localStorage.setItem("userName", JSON.stringify(name))
      localStorage.setItem("userPhone", JSON.stringify(phone))
    }
  };
// Выдача ошибки, если пользователь ничего не ввел в поля
  useEffect(()=> {
    name.length > 0 && phone.length > 0
    ? setButtonError(false)
    : setButtonError(true);
  }, [name, phone]);

  // useEffect(() => {
  //   if(name && phone) {
  //     setButtonError(false)
  //   }
  // }, [name, phone]);

  // useEffect(()=>{
  //   console.log("name", name);
  //   console.log("phone", phone);
  // }, [name, phone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerType="h1" headerText="Вы вернулись! Добро пожаловать снова в квиз от лучшего учебного центра!"/>
          <Header headerType="h2" headerText="Авторизация"/>
          <form className="welcome__form">
            <AppInput
                inputText="Ваше имя"
                errorText="Введите имя в правильном формате"
                inputPlaceholder="Введите ваше имя"
                inputType = "text"
                inputValue = {name}
                inputChange={setName}
                hasError={nameError}/>
            <AppInput 
                inputText="Ваш номер"
                errorText="Введите номер в правильном формате"
                inputPlaceholder="Введите ваш номер"
                inputType = "number"
                inputValue = {phone}
                inputChange={setPhone}
                hasError={phoneError}
                />
              <AppButton isDisabled={buttonError} buttonClick={handleClick}/> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
