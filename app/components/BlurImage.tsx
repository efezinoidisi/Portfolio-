import Image, { StaticImageData } from "next/image";

export default function BlurImage({
  src,
  alt = "",
  size = 400,
  className = "",
}: {
  src: StaticImageData;
  alt?: string;
  size?: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
        placeholder="blur"
        unoptimized
        className={className}
      />
    </>
  );
}
