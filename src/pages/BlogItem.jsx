import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import Companies from "../components/Companies";
import { BlogComponents, esemenyekComp } from "../components/data";
import { AiOutlineCalendar, AiOutlineEye } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BlogItem = () => {
  const location = useLocation();
  const { item } = location.state;

  //Responsive
  const [isMobile, setIsmobile] = useState(window.innerWidth < 1200);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsmobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Responsive

  //FilterStart
  const [isActive, setActive] = useState(false);
  const [Components, setComponents] = useState(BlogComponents);
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (category) => {
    if (category === selectedType) {
      setSelectedType(null);
    } else {
      setSelectedType(category);
    }
  };

  const filteredItems = selectedType
    ? Components.filter((item) => item.category === selectedType)
    : Components;

  const [SortedItems, setSortedItems] = useState(Components);
  useEffect(() => {
    {
      isActive ? filteredItems : Components;
    }
  }, [isActive]);
  //FilterEnd

  return (
    <div>
      <TopNav />
      <BottomNav />
      <MainText>
        Főoldal / <span>Blog / {item.name}</span>{" "}
      </MainText>
      {isMobile && (
        <MobileCategory>
          <MobileTitle>
            <BiSolidCategory size={25} />
            <h2>KATEGÓRIÁK</h2>
            {isOpen ? (
              <ArrowDown onClick={() => setIsOpen((prev) => !prev)} size={30} />
            ) : (
              <ArrowUp onClick={() => setIsOpen((prev) => !prev)} size={30} />
            )}
          </MobileTitle>
          {isMobile && isOpen ? (
            <div>
              {BlogComponents.map((item, index) => {
                return (
                  <CategoryItemDiv key={index}>
                    <p>{item.category}</p>
                  </CategoryItemDiv>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </MobileCategory>
      )}
      <Wrapper>
        {isMobile === false ? (
          <LeftDiv>
            <CateGoryTitle>
              <BiSolidCategory size={25} />
              <h2>KATEGÓRIÁK</h2>
            </CateGoryTitle>
            <CategoryWrap>
              {Array.from(
                new Set(SortedItems.map((item) => item.category))
              ).map((category) => (
                <CategoryItemDiv
                  key={category}
                  active={category === selectedType}
                  onClick={() => (
                    handleTypeClick(category), setActive((prev) => !prev)
                  )}
                >
                  {category}
                </CategoryItemDiv>
              ))}
            </CategoryWrap>
            <MostRead>
              <CateGoryTitle>
                <AiOutlineEye size={25} />
                <h2>LEGOLVASOTTABBAK</h2>
              </CateGoryTitle>
              <Splide
                options={{
                  type: "slide",
                  perPage: 1,
                  arrows: true,
                  gap: "0rem",
                }}
              >
                {esemenyekComp.map((item, index) => {
                  return (
                    <ItemsWrapper key={index}>
                      <Card>
                        <img src={item.img} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                        <span>
                          <div>
                            <AiOutlineCalendar
                              style={{ marginRight: "0.2rem" }}
                              color="blue"
                              size={20}
                            />{" "}
                            {item.date}
                          </div>
                          <div>
                            <AiOutlineEye
                              style={{ marginRight: "0.2rem" }}
                              color="blue"
                              size={20}
                            />{" "}
                            {item.viewers}
                          </div>
                        </span>{" "}
                      </Card>
                    </ItemsWrapper>
                  );
                })}
              </Splide>
            </MostRead>
          </LeftDiv>
        ) : (
          ""
        )}
        <RightDiv>
          <h1>{item.name}</h1>
          <ComponentWrapper>
            <ItemDiv>
              <img src={item.img} alt="img" />
              <h2>{item.name}</h2>
              <p>{item.text}</p>
              <span>
                <div>
                  <AiOutlineCalendar
                    style={{ marginRight: "0.2rem" }}
                    color="blue"
                    size={20}
                  />{" "}
                  {item.date}
                </div>
                <div>
                  <AiOutlineEye
                    style={{ marginRight: "0.2rem" }}
                    color="blue"
                    size={20}
                  />{" "}
                  {item.viewers}
                </div>
              </span>
            </ItemDiv>
          </ComponentWrapper>
          {isMobile && (
            <>
              <CateGoryTitle>
                <AiOutlineEye size={25} />
                <h2>LEGOLVASOTTABBAK</h2>
              </CateGoryTitle>
              <Splide
                options={{
                  type: "slide",
                  perPage: 1,
                  arrows: true,
                  gap: "0rem",
                }}
              >
                {esemenyekComp.map((item, index) => {
                  return (
                    <ItemsWrapper key={index}>
                      <Card>
                        <Link to="/BlogItem" state={{ item: item }}>
                          <img src={item.img} alt={item.name} />
                        </Link>
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                        <span>
                          <div>
                            <AiOutlineCalendar
                              style={{ marginRight: "0.2rem" }}
                              color="blue"
                              size={20}
                            />{" "}
                            {item.date}
                          </div>
                          <div>
                            <AiOutlineEye
                              style={{ marginRight: "0.2rem" }}
                              color="blue"
                              size={20}
                            />{" "}
                            {item.viewers}
                          </div>
                        </span>{" "}
                      </Card>
                    </ItemsWrapper>
                  );
                })}
              </Splide>
            </>
          )}
        </RightDiv>
      </Wrapper>
      <Companies />
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 2rem;
`;
const ArrowDown = styled(IoIosArrowDown)`
  cursor: pointer;
`;
const ArrowUp = styled(IoIosArrowUp)`
  cursor: pointer;
`;
const MobileCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-left: 0.5rem;
    margin-right: 1rem;
  }
`;
const MobileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
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
const MostRead = styled.div``;
const CategoryItemDiv = styled.div`
  border-radius: 0.3rem;
  padding: 0.2rem;
  padding-left: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #0047ab;
    transition: 0.3s ease;
    color: white;
  }
`;
const CateGoryTitle = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: flex-start;
  align-items: center;
  color: #0f1822;
  padding-left: 5rem;
  background-color: #ececec;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  margin-top: 0.5rem;
  h2 {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 1200px) {
    padding-left: 0;
    justify-content: center;
  }
`;
const CategoryWrap = styled.div`
  padding: 0 4rem;
  margin-top: 1rem;
  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
`;
const LeftDiv = styled.div`
  width: 30%;
  height: 100%;
`;
const ComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const RightDiv = styled.div`
  width: 70%;
  height: 100%;
  h1 {
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    color: #0f1822;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const ItemDiv = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  margin: 0.8rem;
  text-align: center;
  h2 {
    font-size: 1.5rem;
    padding: 0.5rem 0.5rem;
  }
  p {
    color: #333333;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    padding: 0 0.5rem;
  }
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding: 0 4rem;
    div {
      display: flex;
      align-items: center;
    }
    @media (max-width: 400px) {
      width: 90%;
      padding: 0 0;
    }
  }
  img {
    width: 50%;
    height: auto;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
      transition: 0.2s ease;
    }
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

const Card = styled.div`
  position: relative;
  width: 350px;
  height: 480px;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0.5rem;
  h2 {
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
  }
  p {
    color: #333333;
    font-weight: 400;
    font-size: 0.8rem;
    text-align: left;
    padding: 0 0.5rem;
  }
  span {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding: 1rem 0.5rem;
    div {
      display: flex;
      align-items: center;
    }
    @media (max-width: 400px) {
      width: 90%;
    }
  }
  img {
    width: 90%;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
      transition: 0.2s ease;
    }
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;

const ItemsWrapper = styled(SplideSlide)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export default BlogItem;
