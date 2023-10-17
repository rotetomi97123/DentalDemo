import React from 'react'
import styled from 'styled-components'
import {BsSend} from 'react-icons/bs'

const Newsletter = () => {
  return (
    <Wrapper>
        <TextDiv>
            <h2>íratkozzon fel a hírlevelünkre</h2>
            <p>...rendszeresen informálódhat aktuális ajánlatainkról</p>
        </TextDiv>
        <InputDiv>
            <input type='email' placeholder='Email-cím' />
            <SendBox>
                <Send />
            </SendBox>
        </InputDiv>
        <CheckDiv>
            <CheckboxContainer>
                    <StyledCheckbox />
                    <p>Beleeggyezem,hogy a(az) Dental-Medical oldal kezelje az adataimat.Részletek az <span>adatvédelmi nyilatkozatban.</span></p>
            </CheckboxContainer>
        </CheckDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 30vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:  #0F1822;
    padding: 0 3rem;
    border-bottom: 1px solid grey;
    @media (max-width: 1400px){
        flex-direction:column;
        justify-content:center;
        height:auto;
        padding: 2rem 0;
    }
`
const CheckDiv = styled.div`
    display:flex;
    align-items:center;
    padding: 0 1rem;
    span{
        color:#0047AB ;
    }
    p{
        font-size: 0.9rem;
        letter-spacing: 0px;
        margin-left: 0.5rem;
        color:white;
    }
    @media (max-width: 700px){
        p{
            margin-top: 0.5rem;
        }
    }
`
const SendBox = styled.div`
    width: 20%;
    height: 48x;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #0047AB;
    border:none;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    cursor:pointer;
    &:hover{
        opacity: 80%;
        transition: 0.3s ease;
    }
`
const TextDiv = styled.div`
    color:white;
    h2{
        font-size: 1.2rem;
        letter-spacing: 0;
        margin-bottom: 0.5rem;
    }
    p{
        font-size: 0.9rem;
    }
    @media (max-width: 1400px){
        margin: 0.5rem 0;
        text-align:center;
    }
`
const InputDiv = styled.div`
    width: 400px;
    height: 48px;
    border: none;
    border-radius: 0.5rem;
    background:none;
    display:flex;
    justify-content:space-between;
    margin-left: 0.5rem;
    input{
        width: 90%;
        border: none;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        padding-left: 0.5rem;
        font-size: 1rem;
    }
    @media (max-width: 1400px){
        margin: 1rem 0;
    }
    @media (max-width: 600px){
        width: 80%;
    }
`
const Send = styled(BsSend)`
    color:white;
    font-size:1.8rem;
    border:none;

`
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide the native checkbox */
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  border-radius:2px;
  border: 1px solid darkgrey; /* Default border color for the checkbox (red) */
  outline: none;
  cursor: pointer;
  margin-right: 0.5rem;
  /* Change the custom checkbox style when it's checked */
  &:checked {
    border-color: #0047AB; /* Border color for the checked checkbox (red) */
    background-color: #0047AB; /* Background color for the checked checkbox (red) */
  }

  /* Add the checkmark inside the checkbox */
  &::before {
    content: '\u2713'; /* Unicode checkmark character */
    position: absolute;
    top: -1px;
    left: 3px;
    font-size: 14px;
    color: #fff; /* Color of the checkmark (white) */
    display: none; /* Hide the checkmark by default */
  }

  /* Display the checkmark when the checkbox is checked */
  &:checked::before {
    display: block;
  }
`;

const CheckboxContainer = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-top:2rem;
  width:635px;
  @media (max-width: 700px) {
    flex-direction:column;
    width:98%;
    font-size:0.9rem;
    text-align:center;
  }
`;
export default Newsletter