import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <div className="info">
            <p>Fique por dentro detodas as novidades da Plasbil</p>
        </div>
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <button>Send</button>
    </div>
  )
}

export default Form