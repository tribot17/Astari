import { ColorMap } from "../../../interfaces/interfaces";

export const eyes: ColorMap = {
  "1": (hue: string) => {
    return `    <svg
      viewBox="0 0 518 147"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="147" rx="7" fill=${hue} />
      <rect x="32" y="18" width="24" height="73" rx="10" fill="white" />
      <rect x="457" width="61" height="147" rx="7" fill=${hue} />
      <rect x="487" y="20" width="24" height="73" rx="10" fill="white" />
    </svg>`;
  },
  "2": (hue: string) => {
    return `<svg
      viewBox="0 0 515 147"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="147" rx="16" fill=${hue} />
      <rect x="455" width="60" height="147" rx="16" fill=${hue} />
      <rect x="30" y="6" width="24" height="73" rx="10" fill="white" />
      <rect x="485" y="6" width="24" height="73" rx="10" fill="white" />
    </svg>`;
  },
  "3": (hue: string) => {
    return `
    <svg
    viewBox="0 0 515 147"
    fill=${hue}
    xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="60" height="147" rx="30" fill=${hue} />
        <rect x="455" width="60" height="147" rx="30" fill=${hue} />
    </svg>
    `;
  },
  "4": (hue: string) => {
    return `
    <svg
      viewBox="0 0 515 73"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="73" rx="30" fill=${hue} />
      <rect x="455" width="60" height="73" rx="30" fill=${hue} />
    </svg>`;
  },
};

export default eyes;
