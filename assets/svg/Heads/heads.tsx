export const heads = {
  "1": (hue: string) => {
    return `<svg
      viewBox="0 0 878 878"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H878V662C878 781.294 781.294 878 662 878H216C96.7065 878 0 781.294 0 662V0Z"
        fill=${hue}
      />
    </svg>`;
  },
  "2": (hue: string) => {
    return `<svg
      viewBox="0 0 878 878"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H878V728C878 810.843 810.843 878 728 878H150C67.1573 878 0 810.843 0 728V0Z"
        fill=${hue}
      />
    </svg>`;
  },
  "3": (hue: string) => {
    return `<svg
      viewBox="0 0 878 878"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H878V578C878 743.685 743.685 878 578 878H300C134.315 878 0 743.685 0 578V0Z"
        fill=${hue}
      />
    </svg>`;
  },
  "4": (hue: string) => {
    return `<svg
      viewBox="0 0 878 878"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H878V698C878 797.411 797.411 878 698 878H180C80.5887 878 0 797.411 0 698V0Z"
        fill=${hue}
      />
    </svg>`;
  },
};

export default heads;
