import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const[name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

    const [nameError, setNameError] =useState(false);
    const [phoneError, setPhoneError] =useState(false);
    const [emailError, setEmailError] =useState(false);
    const [surnameError, setSurnameError] =useState(false);

    const[buttonError, setButtonError] = useState(true);
    const navigate = useNavigate()

    const regexName = /^[A-Za-zА-Яа-яЁё]+$/;
    const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleClick = () => {
      if(!regexName.test(name)) {
        setNameError(true)
      }
      else if(!regexName.test(surname)) {
        setSurnameError(true)
      }
      else if(!regexNum.test(phone)) {
        setPhoneError(true)
      }
      else if(!regexEmail.test(email)) {
        setEmailError(true)
      }
      else {
        setNameError(false)
        setSurnameError(false)
        setPhoneError(false)
        setEmailError(false)
        navigate("/welcome")
        localStorage.setItem("user_name", JSON.stringify(name))
        localStorage.setItem("user_surname", JSON.stringify(surname))
        localStorage.setItem("user_phone", JSON.stringify(phone))
        localStorage.setItem("user_email", JSON.stringify(email))
      }
    } 

    useEffect(()=>{
        name.length > 0 && surname.length > 0 && phone.length >0 && email.length >0
        ? setButtonError(false)
        : setButtonError(true)
      }, [name, surname, phone, email]);

    return (
        <div className="container">
          <div className="wrapper">
            <div className="regPage">
              <Header headerType="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра!"/>
              <Header headerType="h2" headerText="Регистрация"/>
              <form className="regPage__form">
                <AppInput
                    inputText="Ваше имя"
                    errorText="Пожалуйста, введите ваше имя корректно"
                    inputPlaceholder="Введите ваше имя"
                    inputType = "text"
                    inputValue = {name}
                    inputChange={setName}
                    hasError={nameError}/>
                <AppInput 
                    inputText="Ваша фамилия"
                    errorText="Пожалуйста, введите вашу фамилию корректно"
                    inputPlaceholder="Введите вашу фамилию"
                    inputType = "text"
                    inputValue = {surname}
                    inputChange={setSurname}
                    hasError={surnameError}/>
                <AppInput 
                    inputText="Ваш мобильный номер"
                    errorText="Пожалуйста, введите ваш номер корректно"
                    inputPlaceholder="+998 __ ___ __ __"
                    inputType = "text"
                    inputValue = {phone}
                    inputChange={setPhone}
                    hasError={phoneError}/>
                <AppInput 
                    inputText="Ваш e-mail"
                    errorText="Пожалуйста, введите ваш e-mail корректно"
                    inputPlaceholder="Введите ваш email"
                    inputType = "email"
                    inputValue = {email}
                    inputChange={setEmail}
                    hasError={emailError}/>
                    <AppButton isDisabled={buttonError} buttonClick={handleClick}/>
              </form>
            </div>
          </div>
        </div>
      );
}
export default RegistrationPage;