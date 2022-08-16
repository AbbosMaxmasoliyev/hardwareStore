import React from 'react'
import SmallCards from './smallCards'

// images
import Download from "../images/icons/download-icon.png"
import Calculator from "../images/icons/calc-icon.png"
import Lists from "../images/icons/lists-icon.png"
import Home from "../images/icons/home-icon.png"

const mapInfo = [
    {info:`Area downloads`, image:Download},
    {info:`Calculator of parts`, image:Calculator },
    {info:`Collection REVID`, image:Lists},
    {info:`Be one dealer`, image:Home},
]
    

const SmalCardsBlock = () => {
  return (
    <div className="block_SmallCards">
        {
            mapInfo.map((data)=>(
                <div key={data.info} >
                    <SmallCards image={data.image} info={data.info}/>
                    
                </div>
            ))
        }
        
    </div>
  )
}

export default SmalCardsBlock