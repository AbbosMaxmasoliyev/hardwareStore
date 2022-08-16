import { React, Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// images
import TreloForro from "../images/logos/treloferre.png"


const feedback = [
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    },
    {
        logo: TreloForro, info: "Atendentes muito solícitos e cumpridores de seus deveres, sempre fomos bem atendidos por todos. Em relação aos produtos, somente elogios.", person: {
            name: `José VScagliusi `,
            role: `Empresário Treliforro`,
            adress: `São Paulo - sp`
        }
    }

]


class ClientFeedback extends Component {
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
                items:3,
            },
            1600: {
                items: 3,
            },
        },
    }
    render() {
        return (
            <div className='clients'>
                <h4>Our complete product line</h4>
                <OwlCarousel className={'owl-theme carousel1'}
                    loop={true}
                    margin={34}
                    nav={true}
                    dots={false}
                    autoplay={true}
                    autoplayTimeout={2000}
                    items={3}
                    responsive={this.state.responsive}
                    rtlClass={"owl-rtl"}>
                    {
                        feedback.map((data, index) => (
                            <div className="card" key={index}>
                                <div className="logo">
                                    <img src={data.logo} alt="" />
                                </div>
                                <p className='info'>{data.info}</p>
                                <div className="person">
                                    <p className='name'>
                                        {data.person.name}
                                    </p>
                                    <p className='role'>
                                        {data.person.role}
                                    </p>
                                    <p className='adress'>
                                        {data.person.adress}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        )
    }
}

export default ClientFeedback