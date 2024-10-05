import React from "react";
import { Header } from "../components/Header";

const Thanks = () => {
  let name = JSON.parse(localStorage.getItem("user_name"))
  console.log(name);
  let surname = JSON.parse(localStorage.getItem("user_surname"))
  console.log(surname);
  let phone = JSON.parse(localStorage.getItem("user_phone"))
  console.log(phone);
  let course = JSON.parse(localStorage.getItem("course"))
  console.log(course);
  let grade = JSON.parse(localStorage.getItem("grade"))
  console.log(grade);
  
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header headerType="h2" headerText="Спасибо за прохождение опроса!"/>
          <p>Уважаемый(-ая) {name} {surname}, в течение этого дня мы перезвоним Вам по указанному Вами номеру: {phone}.
            Наш консультант предоставит всю необходимую информацию по курсу {course}. 
            Основываясь на том, что Вы оценили свою готовность начать обучение у нас на {grade}, мы предлагаем Вам скидку на курс в размере 15%.
            Она действительна в течение следующих двух дней. Ждем Вас в TEXNIKUM SCHOOL!</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
