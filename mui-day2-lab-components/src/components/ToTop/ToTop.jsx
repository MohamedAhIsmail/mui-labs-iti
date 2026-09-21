import React, { useEffect, useState } from "react";
import "./ToTop.css";

export default function ToTop() {
  
  const [isVisible, setIsVisible] = useState(false);

  
  function showBtn() {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function clickToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {

    window.addEventListener("scroll", showBtn);

  }, []);

  return (
    <>
      <div className={`top ${isVisible ? "show" : "hide"}`} onClick={clickToTop}>
        <i className="fa-solid fa-angles-up"></i>
      </div>
    </>
  );
}
