import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CountingSection from './CountingSection'
import FastCounting from './FastCounting'

const Numbers = () => {
    
  return (
    <Wrapper>
        <TextDiv>
            <h1>Dental Medical Számokkal</h1>
            <p>Statisztika</p>
        </TextDiv>
        <ItemWrapper>
            <ItemDiv>
                <CountingSection targetNumber={22} />
                <p>Éve az ön megbizható partnere</p>
            </ItemDiv>
            <ItemDiv>
                <CountingSection targetNumber={45} />
                <p>Közvetlenül képviselt, világ legnagyobb fogászati gyártó</p>
            </ItemDiv>
            <ItemDiv>
                <FastCounting targetFastNumber={15000} />
                <p>Termék fogorvosok és fogtechnikusok számára</p>
            </ItemDiv>
            <ItemDiv>
                <FastCounting targetFastNumber={5000} />
                <p>Fogorvosi rendelő és laboratórium rendel tölünk árút évente</p>
            </ItemDiv>
        </ItemWrapper>
    </Wrapper>
  )
}

export default Numbers
const Wrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
`
const ItemWrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
    @media (max-width: 700px){
        flex-direction:column;
        align-items:center;
    }
`
const ItemDiv = styled.div`
    width: 250px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        color:#222222;
        font-size: 0.9rem;
        text-align:center;
        margin-top: 1rem;
        @media (max-width: 700px){
            margin: 1rem 0;
        }
    }
`
const TextDiv = styled.div`
    width: 100%;
    height: 20vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
`