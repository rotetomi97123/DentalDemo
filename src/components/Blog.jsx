import React from 'react'
import styled from 'styled-components'
import { BlogComponents } from './data'
import {AiOutlineCalendar, AiOutlineEye} from 'react-icons/ai'

const Blog = () => {
  return (
    <Wrapper>
        <TextDiv>
            <h1>Blog</h1>
        </TextDiv>
        <ComponentWrapper>
            {BlogComponents.map((item,index) => {
                return(
                    <ItemDiv key={index}>
                        <img src={item.img} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                        <span>
                            <div><AiOutlineCalendar style={{marginRight:'0.2rem'}} color='blue' size={20} /> {item.date}</div>
                            <div><AiOutlineEye style={{marginRight:'0.2rem'}} color='blue' size={20} /> {item.viewers}</div>
                        </span>
                    </ItemDiv>
                )
            })}
        </ComponentWrapper>
    </Wrapper>
  )
}

export default Blog

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color:#ECECEC;
`
const ItemDiv = styled.div`
    position: relative;
    width: 325px;
    height: 490px;
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
        @media (max-width: 400px){
            width: 90%;
        }
    }
    img{
        display: block;
        transition: transform 0.3s ease;
        &:hover{
            transform: scale(1.05);
            transition: 0.2s ease;
        }
    }
    @media (max-width: 400px){
        width: 90%;
    }
`
const TextDiv = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ComponentWrapper = styled.div`
    padding: 0 0.5rem;
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    
`