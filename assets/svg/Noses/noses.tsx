export const noses = {
  "1": (hue: string) => {
    return `
    <svg
    viewBox="0 0 491 424"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
    >
    <rect x="111" width="268" height="424" rx="62" fill=${hue} />
    <rect
    x="491"
    y="293"
    width="131"
    height="223"
    rx="62"
    transform="rotate(90 491 293)"
    fill=${hue}
    />
    <rect
    x="223"
    y="293"
    width="131"
    height="223"
    rx="62"
    transform="rotate(90 223 293)"
    fill=${hue}
    />
    <rect
    x="289"
    y="55"
    width="61"
    height="176"
    rx="25"
    fill="#D9D9D9"
    fill-opacity="0.39"
    />
    </svg>
    `;
  },
  "2": (hue: string) => {
    return `<svg
    viewBox="0 0 500 482"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M123 20C123 8.9543 131.954 0 143 0H357C368.046 0 377 8.95431 377 20V482H123V20Z"
      fill=${hue}
    />
    <path
      d="M377 315L484.226 362.676C491.193 365.774 495.793 372.564 496.086 380.183L500 482L377 482L377 315Z"
      fill=${hue}
    />
    <path
      d="M123 315L15.7739 362.676C8.80686 365.774 4.20728 372.564 3.91436 380.183L7.69845e-06 482L123 482L123 315Z"
      fill=${hue}
    />
    <rect
      x="281"
      y="87"
      width="61"
      height="176"
      rx="10"
      fill="#D9D9D9"
      fill-opacity="0.39"
    />
  </svg>`;
  },
  "3": (hue: string) => {
    return `<svg
    viewBox="0 0 313 436"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="44.5" cy="346.5" r="44.5" fill=${hue} fill-opacity="0.8" />
    <circle cx="268.5" cy="346.5" r="44.5" fill=${hue} fill-opacity="0.8" />
    <path
      d="M45 100C45 44.7715 89.7715 0 145 0H169C224.228 0 269 44.7715 269 100V386C269 413.614 246.614 436 219 436H95C67.3858 436 45 413.614 45 386V100Z"
      fill=${hue}
    />
    <rect
      x="186"
      y="80"
      width="51"
      height="156"
      rx="25"
      fill="#D9D9D9"
      fill-opacity="0.39"
    />
  </svg>`;
  },
  "4": (hue: string) => {
    return `<svg
    viewBox="0 0 199 273"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
    >
    <rect width="198.545" height="273" rx="99.2727" fill=${hue} />
    <rect
      x="37.2271"
      y="48.0854"
      width="39.554"
      height="120.989"
      rx="19.777"
      fill="#D9D9D9"
      fill-opacity="0.39"
    />
  </svg>`;
  },
};

export default noses;
