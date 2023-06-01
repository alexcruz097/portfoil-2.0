import React, { useEffect, useState } from "react";
import scrollBTN from "./image-icons/scroll-up-btn.gif";
function ScrollButton() {
  const [backToTopButton, setBackToStopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setBackToStopButton(true);
      } else {
        setBackToStopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "5px",
            border: "none",
            backgroundColor: "transparent",
           
          }}
          onClick={scrollUp}
        >
          <img style={{borderRadius: "50%"}} src={scrollBTN} />
        </button>
      )}
    </>
  );
}

export default ScrollButton;
