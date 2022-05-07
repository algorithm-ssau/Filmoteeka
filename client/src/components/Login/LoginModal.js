import React from 'react'
import './LoginModal.css'
import {useHttp} from "../../hooks/http.hook.js"

export default function Modal() {
    const [isOpen, setIsOpen] = React.useState(false)
    const {loading, request} = useHttp()
    
    const loginHandler = async () => {
        try {
          const data = await request('/api/auth/login', 'POST', null)
        }
        catch (e) {}
      }

    return (
        <>
            <button className="loginButton" onClick={() => setIsOpen(true)}>Вход</button>

            {isOpen && (
                <div className='modal'>
                    <div className='modal-body'>
                        <h1>Авторизация</h1>
                        <label>
                            Имя аккаунта
                            <input className="text_boxes" type="text"/>
                        </label>
                        <label>
                            Пароль
                            <input className="text_boxes" type="password"/>
                        </label>


                           <div className="buttonsDiv">
                                <button className="buttons" onClick={loginHandler}>Вход</button>
                               <button className="buttons">Регистрация</button>
                            </div>

                            <button className="buttons" onClick={() => setIsOpen(false)}>Закрыть</button>
                      </div>
                </div>
            )}
        </>
     )
}