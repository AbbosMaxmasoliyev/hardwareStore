import { React, Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// images
import Door from "../images/products/Door.png"
import Door1 from "../images/products/Door1.webp"
import Door3 from "../images/products/Door3.webp"
import Enteryer from "../images/products/Enteryer.png"
import Shift from "../images/products/Shift.png"
import Window from "../images/products/Window.png"

const image_carousel = [
    { image: Door, info: "Sanfonadas", type:"Door" },
    { image: Door1, info: "Classic", type:"Door" },
    { image: Door3, info: "Classic", type:"Door" },
    { image: Enteryer, info: "Vinyls", type:"Lining" },
    { image: Shift, info: "Shift", type:"Lining" },
    { image: Window, info: "Classic", type:"Window" },
]


class AllProducts extends Component {
    state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    }
    render() {
        return (
            <div className='allProducts'>
                <h4>Our complete product line</h4>
                <OwlCarousel className={'owl-theme carousel1'}
                    loop={true}
                    margin={50}
                    nav={true}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={2000}
                    items={5}
                    responsive={this.state.responsive} 
                    rtlClass={"owl-rtl"}>
                    {
                        image_carousel.map((data,id) => (
                            <div className={'item'} key={id}>
                                <div className='card'>
                                <p >{data.type}</p>
                                <p className='info'>{data.info}</p>
                                <img src={data.image} alt="" />
                                
                                </div>

                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        )
    }
}

export default AllProducts