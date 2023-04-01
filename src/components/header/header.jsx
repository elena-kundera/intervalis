import './header.scss';
//import React, { useState } from 'react';

function Header() {


    return(
        <>
        <header className="header">

            <div className="logo_container"><p className='logo'>INTERVALIS</p></div>

            <div className='adding_container'>
                <div className="inputNewWord_container"><input className='inputNewWord'></input></div>
                <div className="sendNewWord_container"> <button className='sendNewWord'>Добавить слово</button></div>
            </div>
        </header>
        
        </>
        
    );
}


// Под хэдэром большая кнопка "начать тренировку", по клику на нее открываются карточки. Под кнопкой "Начать тренировку"/карточками 
// - таблица со всеми загруженными пользователем словами


export default Header;