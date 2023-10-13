import React, { useState } from 'react'
import styled from 'styled-components'
import {BsBoxSeam,BsBook,BsHouseDoor} from 'react-icons/bs'
import {FiSettings,FiPhoneCall} from 'react-icons/fi'
import {GiMoneyStack} from 'react-icons/gi'

const Dental = () => {

    const [isActive , setIsActive] = useState(true)

  return (
    <Wrapper>
            <TextDiv>
                <h1>Dental Medical</h1>
            </TextDiv>
        <ItemWrapper>
            <ItemDiv>
                <span>
                    <BsBoxSeam  color='white'/>
                </span>
                <p>Forgalmazás és képviselet</p>
            </ItemDiv>
            <ItemDiv>
                <span>
                    <BsBook  color='white'/>
                </span>
                <p>Továbbképzés</p>
            </ItemDiv>
            <ItemDiv>
                <span>
                    <FiSettings  color='white'/>
                </span>
                <p>Szerviz és karbantartás</p>
            </ItemDiv>
            <ItemDiv>
                <span>
                    <FiPhoneCall  color='white'/>
                </span>
                <p>Tanácsadás</p>
            </ItemDiv>
        </ItemWrapper>
        <ItemWrapper>
            {isActive ? 
            <Button onClick={() => (setIsActive(false))}>Bővebben</Button> : 
            <>
            <ItemDiv>
                <span>
                    <GiMoneyStack  color='white'/>
                </span>
                <p>Segitség lizinghez és hitelfelvételhez</p>
            </ItemDiv>
            <ItemDiv>
                <span>
                    <BsHouseDoor  color='white'/>
                </span>
                <p>A helyiség kialakitása és tervezés</p>
            </ItemDiv>
            </>}
        </ItemWrapper>
    </Wrapper>
  )
}

export default Dental

const TextDiv = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ItemDiv = styled.div`
    width: 250px;
    height: 200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align: center;
    span{
        width: 85px;
        height: 85px;
        background: #222222;
        display:flex;
        justify-content:center;
        align-items: center;
        border-radius: 50%;
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    p{
        font-size: 1.1rem;
        font-weight: 600;
        cursor:pointer;
        &:hover{
            color:#0047AB;
            transition: 0.3s ease;
        }
    }
`
const Button = styled.div`
    width: 150px;
    padding: 0.7rem;
    background: #0047AB;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    cursor:pointer;
    &:hover{
        opacity: 90%;
        transition: 0.3s ease;
    }
`
const Wrapper = styled.div`

`
const ItemWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 950px){
        flex-direction:column;
    }
`