import React from 'react'
import {FaInstagram, FaLinkedin, FaGithubSquare} from 'react-icons/fa'

export const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-1">
                <section className="mb-1">
                    <a target="_blank" className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/mateoduque03/" role="button" rel="noreferrer">
                        <FaInstagram className="fab fa-instagram" />
                    </a>
                    <a target="_blank" className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/mateo-duque-a61ba6158/" role="button" rel="noreferrer">
                        <FaLinkedin className="fab fa-linkedin-in" />
                    </a>
                    <a target="_blank" className="btn btn-outline-light btn-floating m-1" href="https://github.com/MateoDuque03" role="button" rel="noreferrer">
                        <FaGithubSquare className="fab fa-github" />
                    </a>
                </section>
                </div>
                <div className="text-center p-2">
                © 2021 Copyright By: Duvan Mateo Duque Urrea
                </div>
            </footer>
        </div>
    )
}

export default Footer;
