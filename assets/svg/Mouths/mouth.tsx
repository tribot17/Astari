export const mouth = {
  "1": (hue: string) => {
    return `
    <svg
    viewBox="0 0 976 172"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
    >
    <rect width="976" height="172" rx="86" fill=${hue} />
  </svg>`;
  },
  "2": (hue: string) => {
    return `<svg viewBox="0 0 772 172" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0H772V142C772 158.569 758.569 172 742 172H30C13.4314 172 0 158.569 0 142V0Z"
        fill="#C05B5B"
      />
      <path
        d="M596 172L185 172L185 154C185 137.431 198.431 124 215 124L566 124C582.569 124 596 137.431 596 154L596 172Z"
        fill="#CD3E3E"
      />
      <path d="M44 0H736L718.369 62H57.2229L44 0Z" fill="#D9D9D9" />
    </svg>`;
  },
  "3": (hue: string) => {
    return `<svg
    viewBox="0 0 630 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H630V22C630 104.843 562.843 172 480 172H150C67.1573 172 0 104.843 0 22V0Z"
      fill="#9A5050"
    />
    <ellipse
      cx="307.5"
      cy="86"
      rx="78.5"
      ry="86"
      fill="#835252"
      fill-opacity="0.5"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M572.635 140.009C547.196 160.029 515.187 172.001 480.414 172.001H149C114.466 172.001 82.6573 160.193 57.3032 140.419L572.635 140.009Z"
      fill="#D9D9D9"
    />
    <path
      d="M630 0L0 6.03217e-05L16.051 26L617.962 25.9999L630 0Z"
      fill="#D9D9D9"
    />
    <path
      d="M630 0L0 6.03217e-05L16.051 26L617.962 25.9999L630 0Z"
      fill="#D9D9D9"
    />
  </svg>`;
  },
  "4": (hue: string) => {
    return `<svg
    viewBox="0 0 528 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H528V20.023C528 102.866 460.843 170.023 378 170.023H150C67.1573 170.023 0 102.866 0 20.023V0Z"
      fill="#9A5050"
    />
    <ellipse
      cx="263.5"
      cy="86.9885"
      rx="90.5"
      ry="85.0115"
      fill="#835252"
      fill-opacity="0.5"
    />
    <path
      d="M528 0L0 6.03217e-05L13.4522 25.7011L517.911 25.7011L528 0Z"
      fill="#D9D9D9"
    />
    <path
      d="M528 0L0 6.03217e-05L13.4522 25.7011L517.911 25.7011L528 0Z"
      fill="#D9D9D9"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M513.382 85.0117C489.166 135.31 437.714 170.023 378.154 170.023H301.201C299.46 170.023 297.725 169.993 295.999 169.934C296.046 123.025 334.089 85.0117 381.01 85.0117H513.382Z"
      fill="#B33A3A"
    />
  </svg>`;
  },
};

export default mouth;
