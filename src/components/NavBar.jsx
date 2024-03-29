import { useEffect, useState } from "react";
import { useStore, login } from './netlifyAuth.js'

export default function NavBar() {
    return (
        <div className="nav-bar sticky" id="navBar">
            <div>
            </div>
            <div>
                <a className="header-link" href='/'>
                    <strong>GORP</strong>
                </a>
            </div>
            <div className="login-div">
                <button 
                    className="login-button" 
                    onClick={login}
                >
                    login
                </button>
            </div>
        </div>
    )
}