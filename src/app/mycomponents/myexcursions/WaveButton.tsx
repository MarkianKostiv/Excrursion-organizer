"use client";
import React, { useState } from "react";

const WaveButton = ({ width, height, content, link }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Логіка обробки натискання кнопки
    window.open(link, "_blank");
  };

  return (
    <button
      className={`wave-button ${isHovered ? "is-hovered" : ""}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default WaveButton;
