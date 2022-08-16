import { React, Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// images
import Marmar from "../images/materiallar/marmar.png"
import Concreto from "../images/materiallar/concreto.png"
import Azulejo from "../images/materiallar/azulejo.png"
import Pedra from "../images/materiallar/pedra.png"
import Chevron from "../images/materiallar/chevra.png"
import Tijolo from "../images/materiallar/tejolo.png"
import Metal from "../images/materiallar/metal.png"

const image_carousel = [
    { image: Marmar, info: "Marmar" },
    { image: Concreto, info: "Concreto" },
    { image: Azulejo, info: "Azulejo" },
    { image: Pedra, info: "Pedra" },
    { image: Chevron, info: "Chevron" },
    { image: Tijolo, info: "Tijolo" },
    { image: Metal, info: "Metal" },
    { image: Marmar, info: "Marmar" },
    { image: Concreto, info: "Concreto" },
    { image: Azulejo, info: "Azulejo" },
    { image: Pedra, info: "Pedra" }
]


class CarouselImage extends Component {
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
            1400:{
                items:6,
            },
            1600: {
                items: 8,
            },
        },
    }
    render() {
        return (
            <div className='forma'>
                <h4>Standart Qoplamalar</h4>
                <OwlCarousel className={'owl-theme'}
                    loop={true}
                    margin={10}
                    nav={true}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={2000}
                    items={4}
                    responsive={this.state.responsive} >
                    {
                        image_carousel.map((data,id) => (
                            <div className={'item'} key={id}>
                                <img src={data.image} alt="" />
                                <p>{data.info}</p>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        )
    }
}

export default CarouselImage