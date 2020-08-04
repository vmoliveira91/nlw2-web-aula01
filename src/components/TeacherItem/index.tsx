import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/23312905?s=460&u=f19adfeaacee4da4a22251da9e77fd0dfe8103f3&v=4" alt="Vitor Oliveira"/>
                <div>
                    <strong>Vitor Oliveira</strong>
                    <span>Informática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias web.
                <br/><br/>
                Apaixonado por desenvolver e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;