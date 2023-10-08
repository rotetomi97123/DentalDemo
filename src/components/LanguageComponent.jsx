import React from 'react'
import styled from 'styled-components'

const LanguageComponent = ({ isActive, toggleActive }) => {
  return (
    <Wrapper>
        <Box>
            <img src='https://www.dental-medical.hu/images/dentalmedical_logo.png?v=1.03' alt='logo' /> 
            <p>Válassza ki az oldal nyelvét!</p>
            <p>Please select your language!</p>
            <select id="selectBox" name="languages">
                <option value="magyar">Magyar</option>
                <option value="srpski">Srpski</option>
                <option value="english">English</option>
            </select>
            <Btn>Átirányitás <br />Go!</Btn>
            <Exit onClick={toggleActive}>X</Exit>
        </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    backdrop-filter: blur(2px)
`
const Box = styled.div`
    position: relative;
    width: 600px;
    height: 300px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background-color:#ECECEC;
    border: 1px solid black;
    border-radius: 0.5rem;
    p{
       margin-top: 1rem;
    }
    select{
        width: 250px;
        height: 40px;
        border: 1px solid black;
        background: none;
        margin-top: 0.5rem;
    }
`
const Btn = styled.button`
    color:white;
    background:red;
    border:none;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    &:hover{
        background-color: blue;
        transition: 0.4s ease;
      }
`
const Exit = styled.div`
      position: absolute;
      right: 1.2rem;
      top: 0.5rem;
      font-size: 1.5rem;
      cursor:pointer;
      font-family: 'Helvetica Neue', sans-serif;
      
`
export default LanguageComponent