import React, {Component} from 'react';
import {withAuth} from './AuthContext';
import './profile.css';

export class Profile extends Component{
    unauthenticate=()=>{
        this.props.logOut();
        this.props.navigate('login')
    }
    render() {
        return <>
        <p>Profile. <button onClick={this.unauthenticate}>Выйти</button> </p>
        <div className="Profile">
            <form className='payForm'>
                <h1>Профиль</h1>
                <h2>Способ оплаты</h2>
                <div className='cardPart'>
                    
                    <label htmlFor="cardNumber">Номер карты:</label>
                    <input id="cardNumber" type="number" name="cardNumber" size="28" />
                    <label htmlFor="cardValid">Срок действия:</label>
                    <input id="cardValid" type="data" name="cardValid" size="28" />
                </div>
                <div className='cardPart'>
                    <label htmlFor="cardUser">Имя владельца:</label>
                    <input id="cardUser" type="number" name="cardUser" size="28" />
                    <label htmlFor="cardCod">CVC:</label>
                    <input id="cardCod" type="data" name="cardCod" size="28" />
                </div>
                <button>Сохранить</button>
            </form>
        </div>
        </>
    }
}


export const ProfileWithAuth = withAuth(Profile)