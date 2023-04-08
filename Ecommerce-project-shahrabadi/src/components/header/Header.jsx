import React from "react";
import Medicine from "../../assets/images/Medicine.svg";
import "./header.css";
import { Card } from "./Card";
import { User } from "./User";
import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <Link to="/">
              <img src={Medicine} alt="Medicine" />
            </Link>
          </div>
          
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
          <div className="product-search">
            <Link to="/products">
              <FaListUl className="listIcon" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};