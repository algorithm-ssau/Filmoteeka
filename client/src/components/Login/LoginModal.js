import React from 'react'
import './LoginModal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button class="loginButton" onClick={() => this.setState({isOpen: true}) }>Вход</button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Авторизация</h1>
                            <label>
                                Имя аккаунта
                                <input class="text_boxes" type="text"/>
                            </label>
                            <label>
                                Пароль
                                <input class="text_boxes" type="password"/>
                            </label>


                            <div className="buttonsDiv">
                                <button class="buttons">Вход</button>
                                <button class="buttons">Регистрация</button>
                            </div>

                            <button class="buttons" onClick={() => this.setState({isOpen: false})}>Закрыть</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}