import React from "react";

const NavBar = ({ linksArr }) => {
  return (
    <div className="content__container">
      <div className="nav__menu">
        {linksArr.map((el)=> 
        <h3 className="nav__menu__item" key={el.id}>{el.text}</h3>
        )}
      </div>
    </div>
  );
};

export default NavBar;
