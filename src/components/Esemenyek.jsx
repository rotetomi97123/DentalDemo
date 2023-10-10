import React from 'react'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { esemenyekComp } from './data'
import {AiOutlineCalendar, AiOutlineEye} from 'react-icons/ai'
import styled from 'styled-components'

const Esemenyek = () => {
  return (
    <div>
    <ComponentWrapper>
        <TextDiv>
            <h1>Események</h1>
        </TextDiv>
            <Splide 
                options={{
                    type: 'slide',
                    perPage: 4,
                    perMove: 1,
                    arrows: false
                }} 
            >
                {esemenyekComp.map((item,index) => {
                    return(
                        <SplideSlide key={index}>
                            <Card>
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                                <span>
                                    <div><AiOutlineCalendar style={{marginRight:'0.2rem'}} color='blue' size={20} /> {item.date}</div>
                                    <div><AiOutlineEye style={{marginRight:'0.2rem'}} color='blue' size={20} /> {item.viewers}</div>
                                </span>                        </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
    /</ComponentWrapper>
    </div>
  )
}

export default Esemenyek


const ComponentWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color:#ECECEC; 
`
const Card = styled.div`
    position: relative;
    width: 325px;
    height: 480px;
    background: white; 
    border-radius: 0.5rem;  
    cursor:pointer;
    overflow:hidden;
    margin: 0.8rem;
    h2{
        font-size: 1rem;
        padding: 0.5rem 0.5rem;
    }
    p{
        color: #333333;
        font-weight: 400;
        font-size: 0.9rem;
        text-align:left;
        padding: 0 0.5rem;
    }
    span{
        position: absolute;
        bottom: 0;
        width: 325px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top: 1.5rem;
        padding: 1rem 0.5rem;
        div{
            display:flex;
            align-items:center;
        }
    }
    img{
        transition: transform 0.3s ease;
        &:hover{
            transform: scale(1.05);
            transition: 0.2s ease;
        }
    }

`
const TextDiv = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    justify-content:center;
    align-items:center;
`