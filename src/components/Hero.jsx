import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { HeroImages } from './data'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Hero = () => {

    const splideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (splideRef.current) {
        const { length } = HeroImages;
        const currentIndex = splideRef.current.splide.index;

        // Determine the next index, and reset to 0 if at the end
        const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;

        // Change the active slide
        splideRef.current.splide.go(nextIndex);
      }
    }, 5000); // 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
        <Splide 
             options={{
                arrows: false,
                pagination: false,
                isLoop: true,
              }} 
              ref={splideRef}
          >
            {HeroImages.map((item,index) => {
                return(
                    <SplideSlide key={index}>
                        <Card>
                            <img src={item.img} alt='heroimg'/>
                        </Card>
                    </SplideSlide>
                )
            })}
        </Splide>
    </Wrapper>
  )
}

export default Hero

const Card = styled.div`
    img{
        height: 80vh;
        @media (max-width: 1200px){
            width: 100%;
            height: auto;
        }
    }
    @media (max-width: 1200px){
        width: 100%;
        heigh:80vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`
const Wrapper = styled.div`
    margin-top: 1rem;
`