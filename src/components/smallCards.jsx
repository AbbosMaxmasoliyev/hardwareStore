import React from 'react'

const SmallCards = (props) => {
  return (
    <div className='smallCards'>
        <img src={props.image} alt="" />
        <p>{props.info}</p>
    </div>
  )
}

export default SmallCards