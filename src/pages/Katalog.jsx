import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Katalogus } from "../components/data";

const Katalog = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <MainText>
        Főoldal / <span>Katalógus</span>
      </MainText>
      <Title>Katalógus</Title>
      <Wrapper>
        <ItemWrapper>
          {Katalogus.map((item, index) => {
            return (
              <Item>
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </Item>
            );
          })}
        </ItemWrapper>
      </Wrapper>
      <Companies />
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;
const Item = styled.div`
  padding: 4rem;
  text-align: center;
  p {
    font-weight: 600;
    color: #0f1822;
  }
  img {
    opacity: 70%;
    cursor: pointer;
    &:hover {
      opacity: 100%;
      transition: 0.3s ease;
    }
  }
`;
const MainText = styled.div`
  padding-top: 10rem;
  padding-left: 4rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #0f1822;
  span {
    color: grey;
  }
  @media (max-width: 1200px) {
    padding-top: 5rem;
  }
`;
const Title = styled.h1`
  color: #0f1822;
  text-align: center;
  padding-top: 2rem;
`;
export default Katalog;
