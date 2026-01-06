import React from "react";

type Props = { top?: boolean };

function GradientMask({ top }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden ${
        top ? "-mt-0 md:-mt-8" : "-mb-0 md:-mb-8"
      }`}
    >
      <div className={`absolute w-full h-full ${top ? "" : "rotate-180"}`}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-(--clr-background3)"
          // className="fill-[#c4bfcc]"
        >
          <path
            d="
    M0,40
    C90,20 180,60 270,45
    C360,30 450,70 540,50
    C630,35 720,75 810,55
    C900,40 990,80 1080,60
    C1170,45 1260,85 1350,65
    C1410,55 1440,70 1440,70
    L1440,240
    L0,240
    Z
  "
          />
        </svg>
      </div>
      <div className={`w-full relative ${top ? "" : "rotate-180"}`}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-(--clr-background3)"
        >
          <path
            d="
    M0,60
    C120,120 240,0 360,50
    C480,110 600,0 720,55
    C840,115 960,5 1080,60
    C1200,110 1320,15 1440,65
    L1440,240
    L0,240
    Z
  "
          />
        </svg>
      </div>
    </div>
  );
}

export default GradientMask;
