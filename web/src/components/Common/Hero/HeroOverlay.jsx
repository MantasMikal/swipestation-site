import React from 'react'

const HeroOverlay = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1334.407"
      height="1067"
      viewBox="0 0 1334.407 1067"
    >
      <defs>
        <filter
          id="a"
          width="1331.407"
          height="1067"
          x="3"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3"></feOffset>
          <feGaussianBlur result="b" stdDeviation="3"></feGaussianBlur>
          <feFlood floodOpacity="0.161"></feFlood>
          <feComposite in2="b" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="c"
          width="1311.339"
          height="1061"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3"></feOffset>
          <feGaussianBlur result="d" stdDeviation="3"></feGaussianBlur>
          <feFlood floodOpacity="0.161"></feFlood>
          <feComposite in2="d" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g
        filter="url(#a)"
        transform="translate(12.077 12.154) translate(-12.08 -12.15)"
      >
        <path
          fill="#6e6e6e"
          d="M845.251 1054.996l480.159-1049H12.003v1049z"
          opacity="0.47"
        ></path>
      </g>
      <g
        filter="url(#c)"
        transform="translate(12.077 12.154) translate(-12.08 -12.15)"
      >
        <path
          fill="#ffba00"
          d="M829.52 1048.996l472.823-1043H9.003v1043z"
          opacity="0.9"
        ></path>
      </g>
    </svg>
  )
}

export default HeroOverlay
