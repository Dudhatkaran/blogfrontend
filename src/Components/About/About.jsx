/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from './About.module.css'
import img1 from "../../images/restaurant.jpg"

const About = () => {

    return (
        <div>
            <section className={ style.hero }>
                <div>
                    <h1>Hello Foodeis</h1>
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.  including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments</p>
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
                    </p><br /><br />
                    <a className={ style.cta }>Learn more</a>
                </div>
                <img src={ img1 } alt="" />
            </section>


        </div>
    )
}

export default About
