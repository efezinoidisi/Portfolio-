import Image from 'next/image';

type CardProps = {
  src: string;
  name: string;
};

export default function Card(props: CardProps) {
  const { src, name } = props;
  return (
    <article>
      <Image src={src} alt='' width={10} height={10} />
    </article>
  );
}
