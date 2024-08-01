import React from 'react'
import { Carousel as AntdCarousel } from 'antd'
import style from './Carousel.module.css'
import Java from '../../assets/images/java.jpg'
import Golang from '../../assets/images/golang.jpeg'
import Python from '../../assets/images/python.jpeg'
import RT from '../../assets/images/react.jpeg'

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};


const Carousel: React.FC = () => {
  
  return (
    <div className={style.carousel}>
      <AntdCarousel
      arrows infinite={true}
      autoplay={true}
      easing='linear'
      waitForAnimate={true}
      style={{width: '100%', height: '100%'}}
      >
        <div>
          <img src={Java} alt="Java" className={style.img} />
        </div>
        <div>
          <img src={Golang} alt="Golang" className={style.img} />
        </div>
        <div>
          <img src={Python} alt="Python" className={style.img} />
        </div>
        <div>
          <img src={RT} alt="React" className={style.img} />
        </div>
      </AntdCarousel>
    </div>
  )
}

export default Carousel