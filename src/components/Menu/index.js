import React from 'react'
import Logo from '../../assets/img/logo.png'
import Button from '../button'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo"src={Logo} alt="Techbiflix" />
            </a>
            <Button as="a"className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu