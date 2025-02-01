import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(props) {
    return (

        <nav className={`navbar border-bottom border-${props.borderBottom} navbar-expand-md py-1 `}
            style={{ background: props.mode === 'light' ? 'white' : '#1f2937', boxShadow: props.mode === 'light' ? '1px 1px 5px rgb(171, 171, 171)' : '1px 1px 5px #0b111e' }}>

            <div id="NavBarContent" className="container">

                <div id="LogoAndImage">

                    <img src="Logo.png" alt="TextUtils Logo" height="45px" width="45px" />

                    <a className="navbar-brand" href="/"><h4 className=" logoTitle m-0">{props.title}</h4></a>

                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center" >

                        <li className="nav-item" >
                            <a className="nav-link active" style={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                aria-current="page" href="#home" >Home</a>
                        </li>

                        <li className="nav-item" >
                            <a className="nav-link" style={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                href="#about">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" style={{ color: props.mode === 'light' ? 'black' : 'white' }}
                                href="#contactUs" >Contact Us </a>
                        </li>
                    </ul>

                </div>

                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>

                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="darkModeSwitch" name="darkmode" />
                    <label className="form-check-label d-none d-md-inline" htmlFor="darkModeSwitch">{props.textColor}</label>

                </div>

            </div>
        </nav>

    )
}

NavBar.propTypes = {
    title: PropTypes.string      // The data type of title is set to string
}
