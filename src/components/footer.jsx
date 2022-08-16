import React from 'react'
// images
import Logo from "../images/logos/Logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="mapouter">
                <div className="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas" src='https://maps.google.com/maps?q=Samarkand&t=&z=13&ie=UTF8&iwloc=&output=embed' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a></div>
            </div>

            <div className="footer_block">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="block">
                    <div className="title">
                        <p>Opening hours</p>
                    </div>
                    <ul>
                        <li>Monday to Friday:</li>
                        <li>8:00 am to 12:00 pm - 1:30 pm to 6:00 pm</li>
                        <li>Saturday: 8:30 am to 12:00 pm</li>
                    </ul>
                </div>
                <div className="block">
                    <div className="title">
                        <p>How to get?</p>
                    </div>
                        <ul>
                            <li>Click to create route in Google Maps</li>
                            <li>Av. Dom Pedro II, 777 - São Paulo - North</li>
                            <li>CEP: 99950-000 - Tapejara - RS - BR</li>
                        </ul>
                </div>
                <div className="block">
                    <div className="title">
                        <p>Contacts</p>
                    </div>
                        <ul>
                            <li>Sign up and receive our news</li>
                            <li>+55 54 3344 3500</li>
                            <li>plasbil@plasbil.com.br</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer