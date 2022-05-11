import React from "react";
import "./LoginModal.css";
import { useHttp } from "../../hooks/http.hook.js";
//import { set } from "express/lib/application";


export default function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { loading, request} = useHttp();
  const [errorMessage, setErrorMessage] = React.useState("");

  const changeLoginHandler = (event) => {
    setLogin(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", {
        login,
        password,
      });
      if(data.message === "Пользователь найден"){
        setIsOpen(false);
      }
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Пользователь не найден")
    }
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", {
        login,
        password,
      });
      if (data.message === "Пользователь создан"){
        loginHandler();
      }
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Пользователь с таким ником уже существует")
    }
  };

  const closeHandler = async () => {
    setIsOpen(false);
    setErrorMessage("");
  }

  return (
    <>
      <button className="loginButton" onClick={() => setIsOpen(true)}>
        Вход
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <div className="auth_error">{errorMessage}</div>
            <h1>Авторизация</h1>
            <label>
              Имя аккаунта
              <input
                className="text_boxes"
                onChange={changeLoginHandler}
                type="text"
              />
            </label>
            <label>
              Пароль
              <input
                className="text_boxes"
                onChange={changePasswordHandler}
                type="password"
              />
            </label>

            <div className="buttonsDiv">
              <button
                className="buttons"
                onClick={loginHandler}
                disabled={loading}
              >
                Вход
              </button>
              <button
                className="buttons"
                onClick={registerHandler}
                disabled={loading}
              >
                Регистрация
              </button>
            </div>

            <button className="buttons" onClick={ closeHandler }
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
}
