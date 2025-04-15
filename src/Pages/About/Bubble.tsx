import React from "react";

interface BubbleProps {
  imageUrl: string;
  size?: number; // Accepts size as a prop
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ imageUrl, size = 100, style }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        ...style, // Allow custom styles
      }}
    >
      <img
        src={imageUrl}
        alt="Bubble"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Bubble;
