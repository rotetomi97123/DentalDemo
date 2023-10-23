import React from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import { esemenyekComp } from "../components/data";
import { AiOutlineCalendar, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Event.css";

const Events = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <h1 className="MainTitle">
        Főoldal / <span>Események</span>{" "}
      </h1>
      <div className="Wrapper">
        <h1 className="ContentTitle">Események a közeljövőben</h1>
        <div className="Content">
          {esemenyekComp.map((item, index) => {
            return (
              <div className="Card" key={index}>
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
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Companies />
      <Footer />
    </div>
  );
};

export default Events;
