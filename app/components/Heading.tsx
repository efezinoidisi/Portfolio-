type HeadingProps = {
  value: string;
  size?: string;
  showLine?: boolean;
  position?: "left" | "right";
};

export default function Heading({
  value,
  size = "text-4xl sm:text-4xl md:text-6xl",
  showLine = true,
  position = "left",
}: HeadingProps) {
  return (
    <h2
      className={`heading mb-9 capitalize font-bold py-1  w-full relative font-ubuntu-mono text-white  ${size} ${
        showLine ? "border-b-2 border-purple/20" : ""
      }  ${position === "left" ? "text-left" : "text-right"}`}
    >
      <span className="text-purple bg-body pl-3" aria-hidden="true">
        #
      </span>
      <span className="bg-body pr-3">{value}</span>
    </h2>
  );
}
