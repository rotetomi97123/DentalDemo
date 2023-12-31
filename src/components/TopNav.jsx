import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";
import { ImEarth, ImFacebook } from "react-icons/im";
import LanguageComponent from "./LanguageComponent";
import { useState } from "react";
import { BsCartFill, BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Wrapper>
        {isScreenSmall ? (
          <AiOutlineMenu
            size={26}
            onClick={() => setMobileMenu(true)}
            style={{ cursor: "pointer" }}
          />
        ) : null}
        <img
          src="https://www.dental-medical.hu/images/dentalmedical_logo.png?v=1.03"
          alt="logo"
        />
        <SearchContainer>
          <input type="text" placeholder="Keresés..." />
          <AiOutlineSearch size={22} style={{ cursor: "pointer" }} />
        </SearchContainer>
        <span onClick={() => setIsActive(true)}>
          <PlanetLogo />
          <p>Hungarian version - Change</p>
        </span>
        <SocialDiv>
          <LinkedLogo />
          <FbLogo />
        </SocialDiv>
        {isActive && (
          <LanguageWrapper>
            <LanguageComponent
              isActive={isActive}
              toggleActive={toggleActive}
            />
          </LanguageWrapper>
        )}
        {isMobileMenu && (
          <MobileMenu>
            <MobileLang onClick={() => setIsActive(true)}>
              <PlanetLogo />
              <p>Hungarian version - Change</p>
            </MobileLang>
            <ul>
              <Link to="/">
                <ListItem>Főoldal</ListItem>
              </Link>
              <Link to="/Blog">
                <ListItem>Blog</ListItem>
              </Link>
              <Link to="/Események">
                <ListItem>Események</ListItem>
              </Link>
              <Link to="/Rólunk">
                <ListItem>Rólunk</ListItem>
              </Link>
              <Link to="/Katalógus">
                <ListItem>Katalógusok</ListItem>
              </Link>
              <ListItem>Beszállitóink</ListItem>
              <ListItem>
                <BsCartFill /> Shop
              </ListItem>
            </ul>
            <Exit onClick={() => setMobileMenu(false)}>X</Exit>
            {isActive && (
              <LanguageWrapper>
                <LanguageComponent
                  isActive={isActive}
                  toggleActive={toggleActive}
                />
              </LanguageWrapper>
            )}
          </MobileMenu>
        )}
      </Wrapper>
    </>
  );
};

export default TopNav;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.2em 3rem;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  img {
    width: 250px;
    height: 30px;
    @media (max-width: 500px) {
      width: 150px;
      height: 20px;
      padding-top: 0.3rem;
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    @media (max-width: 1200px) {
      display: none;
    }
    @media (max-width: 700px) {
      padding: 0rem 0rem;
    }
  }
`;
const MobileLang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
`;
const Exit = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
`;
const MobileMenu = styled.div`
  padding-top: 2rem;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 80vh;
  top: 0;
  left: 0;
  background: white;
  a {
    text-decoration: none;
    list-style-type: none;
    color: black;
  }
  ul {
    padding-top: 2rem;
    padding-left: 2rem;
  }
`;
const LanguageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 40vh;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PlanetLogo = styled(ImEarth)`
  color: #0047ab;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
const SearchContainer = styled.div`
  padding: 0.7rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  background-color: #ececec;
  border-radius: 0.5rem;
  input {
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    margin-right: 0.5rem;
  }
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const ListItem = styled.li`
  width: 80px;
  margin-right: 1rem;
  list-style-type: none;
  font-size: 0.9rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  border-bottom: ${(props) => (props.selected ? "3px solid #0047AB" : "none")};
  &:hover {
    border-bottom: 3px solid #0047ab;
  }
`;

const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 1200px) {
    display: none;
  }
`;
const LinkedLogo = styled(AiFillLinkedin)`
  font-size: 1.2rem;
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    color: blue;
    transition: 0.1s ease;
  }
`;
const FbLogo = styled(ImFacebook)`
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: blue;
    transition: 0.1s ease;
  }
`;
