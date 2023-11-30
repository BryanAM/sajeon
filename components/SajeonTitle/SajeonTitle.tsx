import React from "react";

export interface SajeonTitleProps {
  text: string,
  className?: string,
}

function SajeonTitle({ text, className }: SajeonTitleProps) {
  return (
    <div className={`text-shadow pb-3 text-7xl font-extrabold text-transparent md:text-9xl ${className}`}>
      {text}
    </div>
  );
}

export default SajeonTitle;
