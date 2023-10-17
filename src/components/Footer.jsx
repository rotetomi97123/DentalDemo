import React from 'react'
import Newsletter from './Newsletter'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
      <Newsletter />
        <FooterWrapper>
          <ItemDiv>
            <h2>Közösségi hálózatok</h2>
            <p>LinkedIn</p>
            <p>Facebook</p>
          </ItemDiv>
          <ItemDiv>
            <h2>Blog</h2>
            <p>Bemutatjuk</p>
            <p>CAD-CAM</p>
            <p>Gyökérkezelés</p>
            <p>Implatológia és sebészet</p>
            <p>Kivehető fogpótlások</p>
            <p>Konzerváló fogászat</p>
            <p>Protetika és esztétika</p>
            <p>Rögzitett fogpótlások</p>
            <p>Újdonság,érdekesség</p>
          </ItemDiv>
          <ItemDiv>
            <h2>DentalMedical</h2>
            <p>Beszámoló az eseményeinkről</p>
            <p>Jogi nyilatkozat</p>
            <p>Kapcsolat</p>
            <p>Rólunk</p>
          </ItemDiv>
          <ItemDiv>
            <h2>Elérhetőség</h2>
            <p>H-1256 Szeged, Petőfi Sándur u.12</p>
            <p>Tel: +36 17 79 41 41</p>
            <p>E-mail: info@dentalmed-demo.hu</p>
          </ItemDiv>
        </FooterWrapper>
        <EndWrapper>
          <span>
            <p>Copyright © 2023 Dental-Medical</p>
            <p>Általános szerződési feltételek</p>
            <p>Adatvédelmi nyilatkozat</p>
            <p>Személyes adatok kezelése</p>
          </span>
          <div>
            <p>Code by Toth</p>
          </div>
        </EndWrapper>
    </div>
  )
}

const FooterWrapper = styled.div`
  width: 100%;
  height: 60vh;
  background:  #0F1822;
  display:flex;
  justify-content:space-around;
  align-items:flex-start;
  padding-top: 5rem;
  @media (max-width: 1400px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 140vh;
    padding-top: 0rem;

  }
  `
const EndWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display:flex;
  justify-content:space-between;
  align-items:center;
  color: white;
  font-size: 0.9rem;
  background:  #0F1822;
  padding: 0 4rem;
  border-top: 1px solid grey;
  span{
    display:flex;
    @media (max-width: 1400px){
      flex-direction:column;
    }
  }
  p{
    margin-right: 1rem;
    cursor:pointer;
    &:hover{
      color:#0047AB;
      transition: 0.3s ease;
    }
  }
  @media (max-width: 1400px){
    height: auto;
    flex-direction: column;
    padding: 0.5rem 0;
    text-align:center;
    p{
      margin: 0.5rem 0;
    }
  }
`
const ItemDiv = styled.div`
  color:white;
  height: 100px;
  h2{
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    @media (max-width: 1400px){
      margin-top: 1.5rem;
    }
  }
  p{
    width: 100%;
    margin-bottom: 0.5rem;
    cursor:pointer;
    &:hover{
      color:#0047AB;
      transition: 0.3s ease;
    }
  }
  @media (max-width: 1400px){
    width: 100%;
    height: auto;
    text-align:center;
  }
`

export default Footer