import React from "react";
import small_logo from "../images/logowhite.png"


const Footer = () => {
    return (
        <footer className="">
            <section>
                <div className="company-info">
                    <img src={small_logo} alt=""/>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>                   
                </div>
                <div>
                    <h3>SITEMAP</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
                </div>
                <div>
                    <h3>CONTACT</h3>
                <ul>
                    <li>Address: <br/><i>123 Town Street, Chicago</i> </li>
                    <li>Phone: <br/><i>+ 11 12345678</i></li>
                    <li>E-mail: <br/><i>littlelemon@littlelemon.com</i></li>
                </ul>
                </div>
                <div>
                    <h3>OUR SOCIALMEDIA</h3>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter(X)</a></li>
                </ul>
                </div>
            </section>
        </footer>
    )
}


export default Footer;