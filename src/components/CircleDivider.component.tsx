import React from "react";

export interface ICircleDivider {
  color?: "white" | "gray";
}

const CircleDivider: React.FC<ICircleDivider> = ({ color="gray" }) => {
  return color == "gray" ? (
    <div className="bg-secondary-text p-[2px] rounded-full"></div>
  ) : (
    <div className="bg-white p-[2px] rounded-full"></div>
  );
};
export default CircleDivider;
