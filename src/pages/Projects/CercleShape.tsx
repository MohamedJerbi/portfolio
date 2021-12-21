import React, { CSSProperties } from "react";

interface Props {
  size?: number;
  color?: string;
  top?: number;
  left?: number;
}

const CercleShape: React.FC<Props> = ({
  size = 250,
  color = "#CECECE",
  top = 0,
  left = 0,
}) => {
  const style: CSSProperties = {
    position: "absolute",
    top,
    left,
    height: size,
    width: size,
    backgroundColor: color,
    borderRadius: 180,
    zIndex: -1,
  };
  return <div style={style} />;
};

export default CercleShape;
