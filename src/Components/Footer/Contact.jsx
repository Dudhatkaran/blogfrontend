import React from 'react'
import style from "./Contact.module.css"

const Contact = () => {
    return (
        <>
            <section className={ style.contact }>
                <div className={ style.content }>
                    <h2>Contact Us</h2>
                    <p>Include your name, street address, city, state and zip code, phone number, and email address on single-spaced separate lines</p>
                </div>
                <div className={ style.container }>
                    <div className={ style.contactInfo }>
                        <div className={ style.box }>
                            <div className={ style.icon }><ion-icon name="location-outline"></ion-icon></div>
                            <div className={ style.text }>
                                <h3>Address</h3>
                                <p>10, Yamuna darshan soc.<br />Near krishana Township,Mota varachha,surat.<br />394101</p>
                            </div>
                        </div>
                        <div className={ style.box }>
                            <div className={ style.icon }><ion-icon name="call-outline"></ion-icon></div>
                            <div className={ style.text }>
                                <h3>Phone</h3>
                                <p>+91 63515 63896</p>
                            </div>
                        </div>
                        <div className={ style.box }>
                            <div className={ style.icon }><ion-icon name="mail-outline"></ion-icon></div>
                            <div className={ style.text }>
                                <h3>Email</h3>
                                <p>karanvd2002@gmail.com</p>
                            </div>
                        </div>
                        <h2 className={ style.txt }>Connect with us</h2>
                        <ul className={ style.sci }>
                            <li><ion-icon name="logo-facebook"></ion-icon></li>
                            <li><ion-icon name="logo-linkedin"></ion-icon></li>
                            <li><ion-icon name="logo-twitter"></ion-icon></li>
                            <li><ion-icon name="logo-instagram"></ion-icon></li>
                        </ul>
                    </div>

                    <div className={ style.contactForm }>
                        <div>
                            <h2>Send Message</h2>
                            <div className={ style.inputBox }>
                                <input type="text" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className={ style.inputBox }>
                                <input type="text" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div className={ style.inputBox }>
                                <textarea required="required"></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className={ style.inputBox }>
                                <input type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
