import React from 'react'


// images
import Time_icon from "../images/icons/time_icon.png"
import Calendar_icon from "../images/icons/calendar_icon.png"
import Hovli from "../images/products/hovli.png"

const blogsPosts = [
  { title: `Nec blandit aliquet sagittis tortor`, image: Hovli, hashtag: [` #assunto`, ` #assunto`, ` #assunto`], time: { date: 9, month: 8, year: 2022 }, datePublished:5 },

  { title: `Nec blandit aliquet sagittis tortor`, image: Hovli, hashtag: [` #assunto`, ` #assunto`, ` #assunto`], time: { date: 9, month: 8, year: 2022 }, datePublished:5 },

  { title: `Nec blandit aliquet sagittis tortor`, image: Hovli, hashtag: [` #assunto`, ` #assunto`, ` #assunto`], time: { date: 9, month: 8, year: 2022 }, datePublished:5 },

  { title: `Nec blandit aliquet sagittis tortor`, image: Hovli, hashtag: [` #assunto`, ` #assunto`, ` #assunto`], time: { date: 9, month: 8, year: 2022 }, datePublished:5 },

  { title: `Nec blandit aliquet sagittis tortor`, image: Hovli, hashtag: [` #assunto`, ` #assunto`, ` #assunto`], time: { date: 9, month: 8, year: 2022 }, datePublished:5 },
]



const Blogs = () => {
  return (
    <div className='Blogs'>
      <div className="title">
        <p>Blogs</p>
      </div>
      <div className="blogs_block">
        {
          blogsPosts.map((data, index)=>(
            <div key={index} className="card">
              <img src={data.image} alt={data.title} className="img" />
              <p className='postTitle'>{data.title}</p>
              <div className="hashtag">
              {
                data.hashtag.map((data, index)=>(
                    <p key={index}>{data}</p>
                ))
              }
              </div>
              <div className="date">
                <img src={Calendar_icon}/>
                <p>{data.time.date, data.time.month, data.time.year}</p>
              </div>
              <div className="date">
                <img src={Time_icon}/>
                <p>{data.datePublished} min</p>
              </div>  
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Blogs