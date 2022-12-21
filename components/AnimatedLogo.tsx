import { use, useEffect, useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";

const AnimatedLogo = () => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="all">
          <g id="yellow-square">
            <rect
              fill={"#ffec5b"}
              stroke="none"
              id="rect2625"
              width="64"
              height="64"
              x="223.99998"
              y="223.99998"
            />
          </g>
          <g id="white-square">
            <rect
              fill={useColorModeValue("#000000","#ffffff")}
              stroke="none"
              id="rect2625"
              width="64"
              height="64"
              x="223.99998"
              y="223.99998"
            />
          </g>
          <g id="right-hand">
            <path
              id="path1583"
              fill="#f06ae3"
              stroke="none"
              d="m 351.99998,223.99992 v 63.99996 h 64.00001 v 64.00005 H 287.99996 v 64.00006 H 480 V 223.99991 Z"
            />
          </g>
          <g id="white-right-hand">
            <path
              id="path1583"
              fill={useColorModeValue("#000000","#ffffff")}
              stroke="none"
              d="m 351.99998,223.99992 v 63.99996 h 64.00001 v 64.00005 H 287.99996 v 64.00006 H 480 V 223.99991 Z"
            />
          </g>
          <g id="left-hand">
            <path
              fill="#0bc5ea"
              stroke="none"
              d="m 160.00002,287.99998 -1e-5,-63.99996 -64.000012,1e-5 L 95.999994,160 224,159.99999 V 95.999974 H 31.999982 L 31.999998,288 Z"
              id="path1499"
            />
          </g>
          <g id="white-left-hand">
            <path
              fill={useColorModeValue("#000000","#ffffff")}
              stroke="none"
              d="m 160.00002,287.99998 -1e-5,-63.99996 -64.000012,1e-5 L 95.999994,160 224,159.99999 V 95.999974 H 31.999982 L 31.999998,288 Z"
              id="path1499"
            />
          </g>
        </g>
      </svg>
    </>
  )
}

export default AnimatedLogo;