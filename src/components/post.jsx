import React from 'react'

const Post = (props) => {
  return (
    <div className='Post'>
        <div className="image">
            <img src={props.image}  />
        </div>
        <div className="info_block">
            <p className='title'>{props.title}</p>
            <div className="info">
                <p>{props.info1}</p>
                
                <p>{props.info2} </p>   
            </div>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default Post