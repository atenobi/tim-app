import React from "react";

const SocialMediaBar = ({ socialArr }) => {
  return (
    <div className="social__menu">
      {socialArr.map((soc) => (
        <div key={soc.id} className="social__menu__item">
          <a 
          href={soc.address} 
          
          target="_blank"
          rel="noreferrer">
            {/* {soc.name} */}
            <svg className="social__svg"><use href={`#${soc.icon}`}></use></svg>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaBar;
