import * as React from "react";

const SpinnerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 48 48"
  >
    <path
      fill="#595D62"
      fillRule="evenodd"
      d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4 4 12.954 4 24M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0"
      clipRule="evenodd"
      opacity="0.24"
    ></path>
    <path
      fill="currentColor"
      d="M1.933 24c-1.067 0-1.941.867-1.855 1.931A24 24 0 1 0 25.93.078C24.867-.008 24 .866 24 1.933c0 1.068.867 1.924 1.93 2.026A20.133 20.133 0 1 1 3.96 25.93C3.856 24.868 3 24 1.932 24"
    ></path>
  </svg>
);

export default SpinnerIcon;
