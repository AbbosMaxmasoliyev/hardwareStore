import React from 'react'

// images
import banner from "../images/banner.png"
import Heart from "../images/icons/heart.png"
import Check from "../images/icons/check.png"
import Machine from "../images/icons/machine.png"
import Nature from "../images/icons/nature.png"
import Settings from "../images/icons/settings.png"
import Burl from "../images/icons/burl.png"
import Clean from "../images/icons/clean.png"
import Water from "../images/icons/water.png"
import Diamond from "../images/icons/diamond.png"




const CardsInfo = [
    { image: Heart, title: `Health`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Check, title: `The best products`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Machine, title: `Delivery service`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Nature, title: `Ecofriendly`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Settings, title: `Installation service`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Burl, title: `Fire safe`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Clean, title: `Without decorations`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Water, title: `Moisture resistant`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
    { image: Diamond, title: `Larger durability`, info: `Lorem ipsum dolor sit amet consectetur adiscing elit In elementum blandit iaculis. Mauris tincidunt ipsum ut commodo varius.` },
]

const OurDifferences = () => {
    return (
        <div className='ourDifference'>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div className="block">
                <div className="block_title">
                    <p>Our benefits</p>
                </div>
                <div className="cards">
                    {
                        CardsInfo.map((data) => (
                            <div className="card" key={data.image}>
                                <div className="image">
                                    <img src={data.image} />
                                </div>
                                <div className="info">
                                    <p className='title'>{data.title}</p>
                                    <p>{data.info}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default OurDifferences