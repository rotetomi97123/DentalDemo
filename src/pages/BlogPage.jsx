import React from 'react'
import styled from 'styled-components'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'
import Companies from '../components/Companies'
import { BlogComponents } from '../components/data'
import {AiOutlineCalendar, AiOutlineEye} from 'react-icons/ai'
import {BiSolidCategory} from 'react-icons/bi'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { esemenyekComp } from '../components/data'

const BlogPage = () => {


  return (
    <div>
        <TopNav />
        <BottomNav />
        <MainText>Főoldal / <span>Blog</span></MainText>
        <Wrapper>
          <LeftDiv>
            <CateGoryTitle>
              <BiSolidCategory size={25} />
              <h2>KATEGÓRIÁK</h2>
            </CateGoryTitle>
            <CategoryWrap>
              {BlogComponents.map((item,index) => {
                return(
                  <CategoryItemDiv key={index}>
                    <p>{item.category}</p>
                  </CategoryItemDiv>
                )
              })}
            </CategoryWrap>
            <MostRead>
              <CateGoryTitle>
                <AiOutlineEye size={25} />
                <h2>LEGOLVASOTTABBAK</h2>
              </CateGoryTitle>
              <Splide 
                    options={{
                        type: 'slide',
                        perPage: 1,
                        arrows: true,
                        gap: '0rem'
                    }} 
                    >
                    {esemenyekComp.map((item,index) => {
                        return(
                            <ItemsWrapper key={index}>
                                <Card>
                                    <img src={item.img} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <p>{item.text}</p>
                                    <span>
                                        <div><AiOutlineCalendar style={{marginRight:'0.2rem'}} color='blue' size={20} /> {item.date}</div>
                                        <div><AiOutlineEye style={{marginRight:'0.2rem'}} color='blue' size={20} /> {item.viewers}</div>
                                    </span>                        </Card>
                            </ItemsWrapper>
                        )
                    })}
                </Splide>
            </MostRead>
          </LeftDiv>
          <RightDiv> 
            <h1>Blog</h1>
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
          </RightDiv>
        </Wrapper>
        <Companies />
        <Footer />
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  margin-top: 2rem;

`
const MainText = styled.div`
  padding-top: 10rem;
  padding-left: 4rem;
  font-size: 1.2rem;
  font-weight:bold;
  color:#0F1822;
  span{
    color:grey;
  }
`
const MostRead = styled.div`

`
const CategoryItemDiv = styled.div`
  border-radius: 0.3rem;
  padding: 0.2rem;
  padding-left: 0.5rem;
  cursor: pointer;
  &:hover{
    background: #0047AB;
    transition: 0.3s ease;
    color:white;
  }
`
const CateGoryTitle = styled.div`
  display:flex;
  width: 100%;
  height: 10vh;
  justify-content:flex-start;
  align-items:center;
  color:#0F1822;
  padding-left: 5rem;
  background-color:#ECECEC;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  h2{
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
`
const CategoryWrap = styled.div`
  padding: 0 4rem;
  margin-top: 1rem;
  p{
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
`
const LeftDiv = styled.div`
  width: 30%;
  height: 100%;
`
const ComponentWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
`

const RightDiv = styled.div`
  width: 70%;
  height: 100%;
  h1{
    text-align:center;
    padding: 1rem 0;
    font-size: 2.5rem;
    color:#0F1822;
  }
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

const Card = styled.div`
    position: relative;
    width: 350px;
    height: 480px;
    background: white; 
    border-radius: 0.5rem;  
    cursor:pointer;
    overflow:hidden;
    margin: 0 0.5rem;
    h2{
        font-size: 1rem;
        padding: 0.5rem 0.5rem;
    }
    p{
        color: #333333;
        font-weight: 400;
        font-size: 0.8rem;
        text-align:left;
        padding: 0 0.5rem;
    }
    span{
        position: absolute;
        bottom: 0;
        display:flex;
        width: 350px;
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
        width: 90%;
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

const ItemsWrapper = styled(SplideSlide)`
    width: 100%;    
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 2rem;
`
export default BlogPage