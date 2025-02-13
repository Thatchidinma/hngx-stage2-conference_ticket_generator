import React from 'react'

const Envelope = ({className}) => {
  return (
<svg
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffff"
    className={className}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.91px;}"
          }
        </style>
      </defs>
      <rect className="cls-1" x={1.5} y={4.36} width={21} height={15.27} />
      <polyline className="cls-1" points="1.5 4.36 12 14.86 22.5 4.36" />
    </g>
  </svg>
  )
}

export default Envelope
