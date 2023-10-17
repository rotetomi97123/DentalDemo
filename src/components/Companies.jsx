import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { companies } from './data'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Companies = () => {

    const splideRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
        if (splideRef.current) {
            splideRef.current.go("+1")
        }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Responsive
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1200) {
        setPerPage(3);
      } else {
        setPerPage(6);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
// Responsive


  return (
    <Wrapper>
        <Splide  ref={splideRef} options={{
          perPage,
          type: 'loop',
          arrows: false,
          pagination: false,
          drag: false,
          gap: '5rem',
          speed: 1000 
        }}>
            {companies.map((item) => {
              return(
                <SplideSlide key={item.id} id={item.id}>
                  <Card>              
                      <img src={item.img} alt='kep' />                         
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position:relative;
`
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow:hidden;
  position:relative;
  img{
    padding: 1rem 1rem;
    position: absolute;
    top:0;
    left:0;
    width:70%;
    height: 70%;
    object-fit: cover;
    @media (max-width: 1200px){
        width: 100%;
    }
  }
`
const StyledSlider = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #d2d2d2;
  white-space: nowrap;
  margin-bottom: 2rem;
  padding-left: 3rem;

`;
const StyledImage = styled.img`
  padding: 1rem 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;

export default Companies
