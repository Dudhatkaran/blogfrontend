/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { info, mail } from 'react'
import style from "./Blog.module.css"
import img1 from "../../images/pizza2.jpg"
import img2 from "../../images/burger.jpg"
import img3 from "../../images/sandwich1.jpg"
import img4 from "../../images/french fries.webp"
import img5 from "../../images/subway.jpg"
import img6 from "../../images/sizler.jpg"
import img7 from "../../images/spaghetti.jpg"
import img8 from "../../images/paneer_shawarma.webp"
import img9 from "../../images/Egg-Rolls.jpg"
import img10 from '../../images/chicken.jpg'
import img11 from '../../images/omelet.jpg'
import img12 from '../../images/hotdog.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
            <div className={ style.teamWrapper }>
                <div className={ style.container }>
                    <h1 align="center">Our Food</h1>
                    <p align="center">Something about our team</p>
                    <div className={ style.teamGrid }>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img1 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Pizza
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">The term pizza was first recorded in the in a Latin manuscript from the Southern Italian town.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Pizza12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img2 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Burger
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">A burger is a flat round mass of minced meat which is fried and often eaten in a bread roll.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Burger12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div> <br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img3 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Sendwich
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">Eating a sandwich every day can certainly fall in line with a healthful, well-rounded diet.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Sendwich12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img10 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Chicken
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">Chickens are average-sized fowls, characterized  and a round body perched on featherless legs.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Chicken12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                    </div><br />

                    <div className={ style.teamGrid }>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img4 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">French-fries
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">The term pizza was first recorded in the in a Latin manuscript from the Southern Italian town.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Pizza12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img5 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Subway
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">Subway was founded by Fred DeLuca and financed by Peter Buck in 1965 as Pete's Super Submarines.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Burger12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div> <br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img6 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Sizzler
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">A sizzler is a medley dish invented in Mumbai.It's cooked and served on a hot metal plate.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Sendwich12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img11 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">omelette
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">In cuisine, an omelette is a dish made from eggs, fried with butter or oil in a frying pan.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">omelette12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ style.teamGrid }>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img7 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Spaghetti
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. </p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Spaghetti12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img8 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Shawarma
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">Shawarma is a popular Middle Eastern meal that is made meat, beef, and chicken.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com"> Shawarma12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div> <br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img9 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Egg roll
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">The egg roll is a variety of deep-fried and spicy appetizer served in American Chinese restaurants.</p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Eggroll12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={ style.colmun }>
                            <div className={ style.teamcol }>
                                <div className={ style.teamcolinner }>
                                    <div className={ style.avatar }><img src={ img12 } alt="Member" /></div><br /><br /><br />
                                    <div className={ style.member - name }> <h2 align="center">Hotdog
                                    </h2> </div><br />
                                    <div className={ style.member - info }><p align="center">Some reports say German immigrants first sold them from push carts in New York City's. </p></div>
                                    <div className={ style.member - mail }> <p align="center"> <a href="mailto:@gmail.com">Hotdog12@gmail.com</a> </p> </div><br />
                                    <Link to="/contact"><div className={ style.button }><button>Order now</button></div><br /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
