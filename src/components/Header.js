import React from "react";
import chefImage from './../images/restaurantchef.jpg'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header">
                <section>
                    <div className="banner">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.</p>
                        <Link to="/booking">
                        <button aria-label="On Click">Reserve the table</button>
                        </Link>
                    </div>
                    <div className="banner-img" >
                        <img src={chefImage} alt="chefImage"></img>
                    </div>
                </section>
            </header>
        </div>
    )
}











export default Header