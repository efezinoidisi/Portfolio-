import Image from 'next/image';
import Link from 'next/link';

type ImageLinkProps = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  href: string;
};

const ImageLink = ({
  src,
  width = 100,
  height = 100,
  alt,
  href,
}: ImageLinkProps) => {
  return (
    <Link href={href} className='w-fit'>
      <Image src={src} width={width} height={height} alt={alt} className='' />
    </Link>
  );
};

export default ImageLink;
