import React from 'react'

import '../../styles/css/Innecesary/styles.css'
export const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                    <span className="bold">About Us</span>
                </div>
                <div>
                    <span className="bold">Contact Us</span>
                </div>
                <div>
                    <span className="bold">Copyright</span>
                </div>
                <div>
                    <span className="bold">Social Media</span>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni necessitatibus maiores, magnam quasi provident sunt!</p>
                </div>
                <div>
                    <p><i class="fas fa-phone"></i> Phone: +50422202220</p>
                    <p><i class="fas fa-envelope-open-text"></i>    Email: makeup@gmail.com</p>
                    <p><i class="fas fa-address-card"></i>  Address: Lomas del Guijarro</p>
                    <p><i class="fas fa-table"></i> Date</p>
                </div>
                <div>
                    <p><i class="fas fa-copyright"></i> All rights reserved</p>
                </div>
                <div>
                    <div className="size">
                        <span>
                            <a href="http://facebook.com" target="_blank" rel="noreferrer">
                                <img className="icono" src={`./images/iconos/facebook.svg`} alt="facebook" />
                            </a>
                        </span>
                        <span>
                            <a href="http://twitter.com" target="_blank" rel="noreferrer">
                                <img className="icono" src={`./images/iconos/gorjeo.svg`} alt="twitter" />
                            </a>
                        </span>
                        <span>
                            <a href="http://instagram.com" target="_blank" rel="noreferrer">
                                <img className="icono" src={`./images/iconos/instagram.svg`} alt="instagram" />
                            </a>
                        </span>
                        <span>
                            <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                                <img className="icono" src={`./images/iconos/linkedin.svg`} alt="linkedin" />
                            </a>
                        </span>
                    </div>
                </div>
            </footer> 
        </div>
    )
}
