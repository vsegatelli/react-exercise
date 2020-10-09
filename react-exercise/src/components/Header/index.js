import React from 'react'
import logo from '../../logo.svg';
import './style.css'

const Header = () => {
    const temaAtual = 'light';
return(
<header>
<img
src={logo}
className="App-logo"
alt="logo"
/>
    <h1>{temaAtual}</h1>
    <a
    className="App-link"
    href="https://github.com/vsegatelli/react-exercise"
    target="_blank"
    rel="noopener noreferrer"
    >
        Acessar Repositório
    </a>
    </header>
   
)
}

export default Header
