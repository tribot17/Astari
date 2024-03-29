import { ColorMap } from "../../../interfaces/interfaces";

export const hairs: ColorMap = {
  "1": (hue: string) => {
    return `<svg 
    viewBox="0 0 878 279" 
    fill=${hue} 
    xmlns="http://www.w3.org/2000/svg"
    >
    <path 
    d="M878 195L0 195L1.23248e-05 80C1.706e-05 35.8172 35.8172 9.76902e-07 80 4.12769e-06L798 5.53301e-05C842.183 5.84809e-05 878 35.8173 878 80L878 195Z"
     fill=${hue}
     />
    <path 
    d="M0 109.388L452 109.388V199C452 243.183 416.183 279 372 279H9.00001C4.02945 279 0 274.971 0 270L0 109.388Z"
    fill=${hue}
    />
    <path 
    d="M878 109.388H818V227.852C818 256.1 840.9 279 869.148 279V279C874.037 279 878 275.037 878 270.148V109.388Z"
     fill=${hue}
     />
    </svg>`;
  },
  "2": (hue: string) => {
    return `<svg
      viewBox="0 0 873 197"
      fill=${hue}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M787 197C754.967 197 729 171.033 729 139L729 41.7879L873 41.7879L873 197L787 197Z"
        fill=${hue}
      />
      <path
        d="M803 81.6909C803 113.723 777.033 139.691 745 139.691L0 139.691L6.97142e-06 75.9999C1.15657e-05 34.0263 34.0264 7.34224e-06 76 1.0273e-05L803 6.10352e-05L803 81.6909Z"
        fill=${hue}
      />
    </svg>`;
  },
  "3": (hue: string) => {
    return `<svg 
    viewBox="0 0 879 419" 
    fill=${hue} 
    xmlns="http://www.w3.org/2000/svg"
    >
    <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M150.05 0C67.2076 0 0.050293 67.1573 0.050293 150V236.576C49.0213 205.985 139.33 185.465 242.635 185.465C398.103 185.465 524.135 231.94 524.135 289.271C524.135 308.107 510.531 325.771 486.747 341H878.05V0H150.05Z"
    fill=${hue}
    />
    <path 
    d="M876 345.5C857.883 449.076 494.019 424.503 364.026 380.328C143 229.5 29.5452 314.95 0.0460187 245.448C-3.45308 171.235 193.036 58.1484 437.96 132.083C681.503 132.083 893.5 245.448 876 345.5Z"
    fill=${hue}/>
    </svg>`;
  },
  "4": (hue: string) => {
    return `<svg  viewBox="0 0 878 354" fill=${hue} xmlns="http://www.w3.org/2000/svg">
    <path 
    d="M0 250C0 111.929 111.929 0 250 0H878V283.031H0V250Z"
     fill=${hue}/>
    <path 
    d="M878 237.408H818V302.853C818 331.101 840.9 354 869.148 354V354C874.037 354 878 350.037 878 345.148V237.408Z"
    fill=${hue}/>
    <path 
    d="M0 224.735H60L60 290.179C60 318.427 37.1005 341.327 8.85246 341.327V341.327C3.96338 341.327 0 337.364 0 332.475L0 224.735Z"
    fill=${hue}
    />
    </svg>
    
    `;
  },
};

export default hairs;
