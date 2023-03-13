import { darkenColor } from "../../../utils/helpers";
export const beards = {
  "1": (hue: string) => {
    return `
    <svg
    viewBox="0 0 811 448"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M0 88.2822H811V348C811 403.228 766.228 448 711 448H100C44.7715 448 0 403.228 0 348V88.2822Z"
    fill=${hue}
    fill-opacity="0.8"
    />
    <path
    d="M0 88.2822H811V300.712C811 341.305 778.093 374.212 737.5 374.212H80C35.8172 374.212 0 338.394 0 294.212V88.2822Z"
    fill=${hue}
    />
    <path d="M0 0H25C36.0457 0 45 8.9543 45 20V88.2824H0V0Z" fill=${hue} />
    <path
    d="M811 0H786C774.954 0 766 8.9543 766 20V88.2824H811V0Z"
    fill=${hue}
    />
    </svg>`;
  },
  "2": (hue: string) => {
    return `
    <svg
      viewBox="0 0 798 523"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="798" height="523" rx="250" fill=${hue} fill-opacity="0.8" />
      <mask
        id="mask0_295_2117"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="798"
        height="523"
      >
        <rect width="798" height="523" rx="250" fill="#B7684F" />
      </mask>
      <g mask="url(#mask0_295_2117)">
        <rect width="798" height="432.725" rx="216.362" fill=${hue} />
      </g>
      <rect
        x="94.0608"
        y="198.457"
        width="75.8555"
        height="44.0185"
        rx="22.0093"
        fill="#D9D9D9"
        fill-opacity="0.05"
      />
      <rect
        x="661.46"
        y="169.359"
        width="75.8555"
        height="56.7019"
        rx="25"
        fill="#D9D9D9"
        fill-opacity="0.05"
      />
      <rect
        x="213.913"
        y="325.29"
        width="68.27"
        height="31.3352"
        rx="15.6676"
        fill="#D9D9D9"
        fill-opacity="0.05"
      />
      <rect
        x="307.974"
        y="271.572"
        width="59.1673"
        height="42.5264"
        rx="21.2632"
        fill="#D9D9D9"
        fill-opacity="0.05"
      />
      <rect
        x="524.92"
        y="299.923"
        width="59.1673"
        height="49.9872"
        rx="24.9936"
        fill="#D9D9D9"
        fill-opacity="0.05"
      />
    </svg>`;
  },
  "3": (hue: string) => {
    return `
    <svg
    viewBox="0 0 878 523"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M174.842 109.91C192.857 44.9588 251.982 0 319.385 0H556.942C623.484 0 682.073 43.8391 700.847 107.678L713 149H164L174.842 109.91Z"
      fill=${hue}
    />
  </svg>;
    `;
  },
  "4": (hue: string) => {
    return `<svg
      viewBox="0 0 811 404"
      fill="${hue}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H811V154C811 292.071 699.071 404 561 404H250C111.929 404 0 292.071 0 154V0Z"
        fill="${darkenColor(hue, 10)}" 
        />
        <path
        d="M0 0H811V47.4703C811 185.541 699.071 297.47 561 297.47H250C111.929 297.47 0 185.541 0 47.4703V0Z"
        fill="${hue}"
      />
    </svg>`;
  },
};

export default beards;
