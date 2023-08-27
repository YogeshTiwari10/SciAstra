import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Teams.scss'
import { kt, td, sm, pv, an1, ok1, vd, at1 } from '../assets';

const Team = () => {

  return (
    <div className="teams-container">
      <div className="institute">
        <h2>Learn from the scientists, research scholars from the top institutes in the world</h2>
        <div className="products-container">
          <div className="product-card">
            <p>Cambridge University</p>
          </div>
          <div className="product-card">
            <p>Harvard university</p>
          </div>
          <div className="product-card">
            <p>University of California</p>
          </div>
          <div className="product-card">
            <p>ETH Zurich</p>
          </div>
          <div className="product-card">
            <p>Max Plank</p>
          </div>
          <div className="product-card">
            <p>University of Edinberg</p>
          </div>
          <div className="product-card">
            <p>John's Hopkins</p>
          </div>
          <div className="product-card">
            <p>Michigan State University</p>
          </div>
          <div className="product-card">
            <p>University of Illinois</p>
          </div>
          <div className="product-card1">
            <p>.... and so on.</p>
          </div>
        </div>
      </div>
      <div className='slider-container'>
        <h3>Meet Your Mentors</h3>
        <div className="slider">
          <h4>Biology</h4>
          <Carousel
            additionalTransfrom={100}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className="slider"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 600,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 600
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className='slider-item'>
              <img src={kt} alt="logo" />
              <p>Mandar Tornekar <br />
                GMC Dhule</p>
            </div>
            <div className='slider-item'>
              <img src={sm} alt="logo" />
              <p>Sehasree Mohanta <br />
                IACS</p>
            </div>
            <div className='slider-item'>
              <img src={pv} alt="logo" />
              <p>Piyush Verma <br />
                IISER Pune</p>
            </div>
            <div className='slider-item'>
              <img src={an1} alt="logo" />
              <p>Aditya Nayak <br />
                IISER Mohali</p>
            </div>
            <div className='slider-item'>
              <img src={td} alt="logo" />
              <p>Tiasha Das <br />
                IISER Berhampur</p>
            </div>
          </Carousel>
        </div>
        <div className="slider">
          <h4>Physics</h4>
          <Carousel
            additionalTransfrom={100}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className="slider"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 600,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 600
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className='slider-item'>
              <img src={kt} alt="logo" />
              <p>Mandar Tornekar <br />
                GMC Dhule</p>
            </div>
            <div className='slider-item'>
              <img src={sm} alt="logo" />
              <p>Sehasree Mohanta <br />
                IACS</p>
            </div>
            <div className='slider-item'>
              <img src={pv} alt="logo" />
              <p>Piyush Verma <br />
                IISER Pune</p>
            </div>
            <div className='slider-item'>
              <img src={an1} alt="logo" />
              <p>Aditya Nayak <br />
                IISER Mohali</p>
            </div>
            <div className='slider-item'>
              <img src={td} alt="logo" />
              <p>Tiasha Das <br />
                IISER Berhampur</p>
            </div>
          </Carousel>
        </div>
        <div className="slider">
          <h4>Chemistry</h4>
          <Carousel
            additionalTransfrom={100}
            arrows
            autoPlaySpeed={3000}
            centerMode={true}
            className="slider"
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 600,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 600
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className='slider-item'>
              <img src={kt} alt="logo" />
              <p>Mandar Tornekar <br />
                GMC Dhule</p>
            </div>
            <div className='slider-item'>
              <img src={sm} alt="logo" />
              <p>Sehasree Mohanta <br />
                IACS</p>
            </div>
            <div className='slider-item'>
              <img src={pv} alt="logo" />
              <p>Piyush Verma <br />
                IISER Pune</p>
            </div>
            <div className='slider-item'>
              <img src={an1} alt="logo" />
              <p>Aditya Nayak <br />
                IISER Mohali</p>
            </div>
            <div className='slider-item'>
              <img src={td} alt="logo" />
              <p>Tiasha Das <br />
                IISER Berhampur</p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="mentor">
        <h4>Mentors & Advisors</h4>
        <div className="mentor-list">
          <div>
            <img src={ok1} alt="" />
            <p> <span>Dr, Omkar </span> <br />
              Principal Project Scientist <br /> at Indian Institute of <br />Technology, Madras</p>
            <br />
            <br />
          </div>
          <div>
            <img src={vd} alt="" />
            <p> <span> Vivek Dwivedi </span> <br />
              Founder SciAstra, Mentor, Qualified NEST, <br /> JEE advanced, Mains, Master's Student at <br /> NISER</p>
            <button>Message him now</button>
          </div>
          <div>
            <img src={at1} alt="" />
            <p> <span> Vivek Dwivedi </span> <br />
              Cofounder SciAstra, Mentor, Qualified NEST, <br /> Master's Student at NISER  JEE advanced,<br /> Mains, Master's Student at NISER</p>
            <button>Message him now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team