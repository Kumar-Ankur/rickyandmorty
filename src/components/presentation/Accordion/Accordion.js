import React, { useState, useRef } from "react";
import Chevron from "../Chevron/Chevron";
import "./Accordion.scss";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);

  /**
   * @function toggleAccordion
   * @description - toggle accordion and set state (active, height, rotate)
   */
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active"
        ? "0px"
        : `${
            content && content.current && content.current.scrollHeight
              ? content.current.scrollHeight
              : 0
          }px`
    );

    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section" data-test="component-accordion">
      <button
        className="accordion"
        onClick={toggleAccordion}
        data-test="component-button"
      >
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
      </button>
      <div
        data-test="component-accordion-content"
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text" data-test="component-accordion-text">
          {props.content}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
