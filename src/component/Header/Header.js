import React from "react";
import SocialMediaIcons from "react-social-media-icons";

const Header = () => {
  const socialMediaIcons = [
    {
      url: "https://www.yangdai.info",
      className: "fas fa-home"
    },
    {
      url: "https://github.com/superyang713/beer_app_react",
      className: "fa-github-square",
    },
    {
      url: "https://linkedin.com/in/yangdai713/",
      className: "fa-linkedin",
    },
  ];
  
  return (
    <SocialMediaIcons
      icons={socialMediaIcons}
      iconSize={"3em"}
      iconColor={"#495056"}
    />
    
  );
};

export default Header;
