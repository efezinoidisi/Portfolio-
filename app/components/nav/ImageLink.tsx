import Image from 'next/image';
import Link from 'next/link';

type ImageLinkProps = {
  src: string;
  size?: number;
  alt: string;
  href: string;
  styles?: string;
  imageStyles?: string;
};

const ImageLink = (props: ImageLinkProps) => {
  const { src, size = 100, alt, href, styles = '', imageStyles = '' } = props;
  return (
    <Link href={href} className={`w-fit ${styles}`}>
      <Image
        src={src}
        width={size}
        height={size}
        alt={alt}
        className={imageStyles}
      />
    </Link>
  );
};

export default ImageLink;
