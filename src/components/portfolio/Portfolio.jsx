import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/re.png";
import Img2 from "../../assets/qu.png";
// import Img3 from "../../assets/3.png";
import {FiGithub} from 'react-icons/fi'
import {Pagination,Navigation,Scrollbar} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination'

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"Renter",
      github:"https://github.com/sidharthhhh/renter",
      demo:"https://renter.live/"
    },
    {
      id:2,
      image:Img2,
      title:"Quote Generator",
      github:"https://github.com/sidharthhhh/gen",
      demo:"https://sidharthhhh.github.io/gen/"
    }
   ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Swiper className="container portfolio__container"
      modules={[Pagination,Navigation,Scrollbar]}
      spaceBetween={40}
      // scrollbar={{draggable:true}}
      // Navigation
      // Scrollbar
      slidesPerView={1}
      
      pagination={{clickable:true}}>

      
        {data.map(({id,image,title,github,demo})=>{
          return(
              <SwiperSlide className="portfolio__item">
              <div className="portfolio__item-image" style={{backgroundImage:{image}}} >
           <img className="portfolio_img"src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a  href={github} className="github_link" target="_blank">
            <FiGithub/>
                </a>
                <a
                  href={demo}
                  className="k"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </SwiperSlide>
            )
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;