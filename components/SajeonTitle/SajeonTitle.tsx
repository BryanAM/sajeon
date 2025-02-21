export interface SajeonTitleProps {
  text: string;
  className?: string;
}

function SajeonTitle({ text, className }: SajeonTitleProps) {
  return (
    <div
      className={`pb-3 text-7xl font-extrabold text-accent text-shadow md:text-9xl ${className}`}
    >
      {text}
    </div>
  );
}

export default SajeonTitle;
