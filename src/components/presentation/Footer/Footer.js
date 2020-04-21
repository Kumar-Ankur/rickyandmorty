import React from "react";
import "./Footer.scss";
import * as constanst from "../../../constants";

const Footer = () => {
  return (
    <div className="footer_container">
      <h2 className="footer_heading">
        {constanst.FOOTER_HEADING} <br />
        <br />
        {constanst.FOOTER_SUB_HEADING}{" "}
        <a href="http://kumarankur.in/" target="_blank" rel="noopener noreferrer" className="footer_link">
          {constanst.FOOTER_LINK}
        </a>
      </h2>
    </div>
  );
};

export default Footer;
