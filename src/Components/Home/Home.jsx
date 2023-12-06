/* eslint-disable no-unused-vars */
import React from 'react'
import Style from './Home.module.css'
import { Link } from 'react-router-dom'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Contact from '../Footer/Contact'

const Home = () => {

    return (
        <>
            <div className={ Style.home }>
                <div className={ Style.homepage }>
                    <div className={ Style.mypage }>
                        <h2>FOOD BLOGS</h2>
                        <p>Start your business based on subscribtion paymant </p><br />
                        <Link to={ "/blog" }><button>Our Products</button></Link>
                    </div>
                </div>
                <About />
                <Blog />
                <Contact />
            </div>

        </>
    )
}

export default Home
