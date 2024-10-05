import React from "react";
import { RouterProvider,  createBrowserRouter } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import { Test } from "./pages/test";
import "./styles/main.css";

const App = () => { // создаем роутер для плавного перехода по страницам
  const router = createBrowserRouter([ // создаем массив из объектов
    {
      path: "/", // путь к компоненту,
      element: <RegistrationPage />, // название компонента
    },
    {
      path: "/welcome", // путь к компоненту,
      element: <Welcome />, // название компонента
    },
    {
      path: "/step-One",
      element: <StepOne />,
    },
    {
      path: "/step-Two",
      element: <StepTwo />,
    },
    {
      path: "/step-Three",
      element: <StepThree />,
    },
    {
      path: "/step-Four",
      element: <StepFour />,
    },
    {
      path: "/thanks",
      element: <Thanks />,
    },
  ])
  return (
    <RouterProvider router={router}/> // Подключаем роутер
  );
};

export default App;
// два и более элемента должны иметь общего родителя, здесь
// h1 и p должны быть обернуты в div