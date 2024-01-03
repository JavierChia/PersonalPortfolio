import { DownArrow } from "../assets";
import React from "react";
import { useSpring, animated } from '@react-spring/web'

function BouncingImage() {
  const [animation, setAnimation] = useSpring(() => ({
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        await next({ y: 3, config: { tension: 270, friction: 30 } });
        await next({ y: -2, config: { tension: 270, friction: 30 } });
      }
    },
    config: { mass: 1, tension: 100, friction: 50 },
  }));

  return (
    <animated.img
      src={DownArrow}
      style={{
        position: "relative",
        bottom: animation.y.interpolate((y) => `${y}px`),
      }}
    />
  );
}

export default BouncingImage;
