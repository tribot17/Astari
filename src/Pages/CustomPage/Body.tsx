import React from "react";

const Body = ({ hue }) => {
  return (
    <svg viewBox="0 0 885 539" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 304C0 192.438 90.4385 102 202 102H683C794.562 102 885 192.438 885 304V539H0V304Z"
        fill="#6C6C6C"
      />
      <path
        d="M330 125.32L357.996 88.8265C361.781 83.8926 367.646 81 373.864 81H430H503.772C510.195 81 516.227 84.0848 519.987 89.2923L546 125.32L438 163L330 125.32Z"
        fill={hue}
      />
      <rect x="364" width="150" height="99" fill={hue} />
      <rect x="330" y="125" width="216" height="47" fill="#040404" />
    </svg>
  );
};

export default Body;
