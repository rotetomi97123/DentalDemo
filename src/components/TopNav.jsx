import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch,AiFillLinkedin} from 'react-icons/ai'
import {ImEarth,ImFacebook} from 'react-icons/im'
import LanguageComponent from './LanguageComponent'
import { useState } from 'react'

const TopNav = () => {
  
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Wrapper>
        <img src='https://www.dental-medical.hu/images/dentalmedical_logo.png?v=1.03' alt='logo' />
        <SearchContainer>
          <input type='text' placeholder='Keresés...' />
          <AiOutlineSearch size={22} style={{cursor: 'pointer'}}/>
        </SearchContainer>
        <span onClick={() => (setIsActive(true))}>
          <PlanetLogo />
          <p>Hungarian version - Change</p>
        </span>
        <SocialDiv>
          <LinkedLogo />
          <FbLogo />
        </SocialDiv>
        {isActive &&<LanguageWrapper>
          <LanguageComponent isActive={isActive} toggleActive={toggleActive} /> 
        </LanguageWrapper>}
      </Wrapper>
    </>
  )
}

export default TopNav

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 1.2em 0.5rem;
  img{
    width: 250px;
    height: 30px;
  }
  span{
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    font-size: 0.9rem;
  }
`
const LanguageWrapper = styled.div`
  position:absolute;
  width:100%;
  height: 100vh;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const PlanetLogo = styled(ImEarth)`
  color:blue;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`
const SearchContainer = styled.div`
  padding: 0.7rem 1.5rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 550px;
  background-color:#ECECEC;
  border-radius: 0.5rem;
  input{
    border:none;
    background: none;
    width: 100%;
    height: 100%;
    margin-right:0.5rem;
}
`
const SocialDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right: 2rem;
`
const LinkedLogo = styled(AiFillLinkedin)`
  font-size: 1.2rem;
  margin-right: 1rem;
  cursor:pointer;
  &:hover{
    color: blue;
    transition: 0.1s ease;
  }
`
const FbLogo = styled(ImFacebook)`
  font-size: 1.2rem;
  cursor:pointer;
  &:hover{
    color: blue;
    transition: 0.1s ease;
  }
`