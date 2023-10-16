import React, { useState } from 'react'
import styled from 'styled-components'
import { comments,work } from './data'


const MinketAjanl = () => {

    const [selectedComp, setSelectedComp] = useState('1')
    const [number, setNumber] = useState(0)

    const [selectedItem, setSelectedItem] = useState('First');
    const [count,setCount] = useState(0)

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };


    const handleCompClick = (item) => {
        setSelectedItem(item);
      };
  
  return (
    <Wrapper>
        <LeftWrapper>
            <h1>Minket ajánlott</h1>
            <Box>
               <h2>{comments[count].title}</h2>
               <p>{comments[count].text}</p>
               <NameDiv>
                    <LeftSide>
                        <ImgContainer>
                            <img src='https://www.dental-medical.hu/images/default_pic.webp' alt='img'/>
                        </ImgContainer>
                        <span>
                            <h3>{comments[count].name}</h3>
                            <h4>{comments[count].position}</h4>
                        </span>
                    </LeftSide>
                    <RightSide>
                        <SmallBox 
                            selected={selectedItem === 'First'}
                            onClick={() => (handleItemClick('First'),setCount(0))}></SmallBox>
                        <SmallBox
                            selected={selectedItem === 'Second'}
                            onClick={() => (handleItemClick('Second'),setCount(1))}></SmallBox>
                        <SmallBox
                            selected={selectedItem === 'Third'}
                            onClick={() => (handleItemClick('Third'),setCount(2))}></SmallBox>
                        <SmallBox
                            selected={selectedItem === 'Fourth'}
                            onClick={() => (handleItemClick('Fourth'),setCount(3))}></SmallBox>
                    </RightSide>
               </NameDiv>
            </Box>
        </LeftWrapper>
        <RightWrapper>
            <TopSection>
                <p
                    selecteditem={selectedComp === '1'}
                    onClick={() => (handleCompClick('1'),setNumber(0))}>SZERVIZ ÉS KARBANTARTÁS</p>
                <p
                selecteditem={selectedComp === '2'}
                onClick={() => (handleCompClick('2'),setNumber(1))}>SEGITSÉG LIZINGHEZ ÉS A HITELFELVÉTELHEZ</p>
                <p
                 selecteditem={selectedComp === '3'}
                 onClick={() => (handleCompClick('3'),setNumber(2))}>TANÁCSADÁS</p>
            </TopSection>
            <BottomSection>
                <img src={work[number].img} />
                <span>
                    <p>{work[number].text}</p>
                    <ShowMore>Bővebben</ShowMore>
                </span>
            </BottomSection>
        </RightWrapper>

    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    padding: 0 4rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
       margin-bottom: 0.5rem;
    }
    @media (max-width: 1600px){
        display:flex;
        flex-direction:column;
        padding: 0 0;
    }
`
const LeftWrapper = styled.div`
    @media (max-width: 700px){
        width: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
`
const ShowMore = styled.button`
    height: 30px;
    border:none;
    cursor:pointer;
    color:white;
    background: #0047AB;
    border-radius: 0.5rem;
    padding: 2rem 2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 2rem;
    font-size: 1.2rem;
    &:hover{
        opacity: 80%;
        transition: 0.3s ease;
    }
`
const RightWrapper = styled.div`
    width: 700px;
    height: 350px;
    border: 1px solid darkgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    @media (max-width: 1600px){
        margin-top: 2rem;
    }
    @media (max-width: 700px){
        width: 90%;
        height: auto;
    }
   
`
const TopSection = styled.div`
    display:flex;
    font-weight:bold;
    font-size: 0.9rem;
    border-bottom: 1px solid darkgrey;
    padding-bottom: 0.5rem;
    p{
        margin-right: 0.8rem;
        cursor:pointer;
        &:hover{
            color:#0047AB;
            transition: 0.3s ease;
        }
    }
    @media (max-width: 700px){
        flex-direction:column;
        p{
            margin-bottom: 0.5rem;
            text-align:center;
        }
    }
`
const BottomSection = styled.div`
    display:flex;
    padding: 1rem 0rem;
    p{
        font-size: 0.9rem;
    }
    img{
        height: 150px;
        margin-right: 2rem;
        cursor:pointer;
        display: block;
        transition: transform 0.3s ease;
        &:hover{
            transform: scale(1.05);
            transition: 0.2s ease;
        }
        @media (max-width: 600px){
           width: 200px;
           height:auto;
           margin-bottom: 0.5rem;
        }
    }
    span{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
    }
    @media (max-width: 600px){
        flex-direction:column;
        width:100%;
    }
`
const SmallBox = styled.button`
    width: 12px;
    height: 12px;
    border: 1px solid #0047AB;
    margin-right: 0.5rem;
    background: ${(props) => (props.selected ? '#0047AB' : 'none')};
    cursor:pointer;

`
const LeftSide = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const RightSide = styled.div`

`
const ImgContainer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #ECECEC;
    display:flex;
    justify-content:center;
    align-items:center;
`
const NameDiv = styled.div`
    padding: 1rem 1rem;
    display:flex;
    justify-content:space-between;;
    align-items:center;
    span{
        display:flex;
        flex-direction:column;
        margin-left: 1rem;
    }
    img{
        width: 40px;
    }
    h3{
        color:#0047AB;
    }
    h4{
        font-weight: 100;
    }
    @media (max-width: 450px){
        flex-direction:column;
        padding: 0 0;
        justify-content:center;
    }
`
const Box = styled.div`
    width: 600px;
    height: auto;
    border: 1px solid darkgrey;
    padding: 1.5rem;
    border-radius: 0.5rem;
    h2{
        font-size: 1.2rem;
        color:#0047AB;
    }
    p{
        font-size: 0.9rem;
        margin-top: 1rem;
    }
    @media (max-width: 700px){
        width: 90%;
        height: auto;
    }
`

export default MinketAjanl