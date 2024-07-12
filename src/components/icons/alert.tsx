import type { HTMLAttributes } from 'react';

export const Alert = (props: HTMLAttributes<SVGSVGElement>) => (
  <svg
    width="50"
    height="46"
    viewBox="0 0 50 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M49.3342 37.9372L29.2523 3.15444C28.3648 1.61721 26.7751 0.699219 24.9999 0.699219C23.2247 0.699219 21.635 1.617 20.7475 3.15444L0.665781 37.9372C-0.221927 39.4744 -0.221927 41.31 0.665781 42.8474C1.55349 44.3849 3.14295 45.3027 4.91816 45.3027H45.0823C46.8573 45.3027 48.4469 44.3849 49.3344 42.8476C50.2219 41.3102 50.2217 39.4746 49.3342 37.9372ZM25.0001 39.6439C23.2377 39.6439 21.8039 38.2101 21.8039 36.4477C21.8039 34.6855 23.2377 33.2517 25.0001 33.2517C26.7625 33.2517 28.1963 34.6855 28.1963 36.4477C28.1961 38.2104 26.7623 39.6439 25.0001 39.6439ZM28.2178 25.9816C28.2178 27.7558 26.7743 29.1993 25.0001 29.1993C23.2259 29.1993 21.7824 27.7558 21.7824 25.9816V11.2135C21.7824 10.3717 22.4648 9.68929 23.3066 9.68929H26.6938C27.5358 9.68929 28.218 10.3717 28.218 11.2135V25.9816H28.2178Z"
      fill="#EB9515"
    />
  </svg>
);