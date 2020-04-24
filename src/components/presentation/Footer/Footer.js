import React from "react";
import "./Footer.scss";
import * as constanst from "../../../constants";

const Footer = () => {
  return (
    <div className="footer_container" data-test='component-footer'>
      <h2 className="footer_heading">
        {constanst.FOOTER_HEADING} <br />
        <br />
        <span style={{ position: 'absolute', top: '2rem'}}>{constanst.FOOTER_SUB_HEADING}{" "}</span>
        <br />
        <a href="http://kumarankur.in/" target="_blank" rel="noopener noreferrer" className="footer_link">
          {constanst.FOOTER_LINK}
        </a>
      </h2>
    </div>
  );
};

export default Footer;
