type HeadingProps = {
  value: string;
  size?: string;
  showLine?: boolean;
};

export default function Heading({
  value,
  size = 'text-2xl md:text-4xl',
  showLine = true,
}: HeadingProps) {
  return (
    <h2
      className={`heading mb-9 capitalize font-bold  after:content-[""]  w-full relative font-ubuntu-mono text-white text-center ${size} ${
        showLine
          ? 'after:absolute after:top-1/2 after:border-purple h-fit after:border-b-2 after:w-full after:-translate-y-1/2 after:left-0 after:-z-10 z-20'
          : ''
      }`}
    >
      <span className='text-purple bg-body pl-3' aria-hidden='true'>
        #
      </span>
      <span className='bg-body pr-3'>{value}</span>
    </h2>
  );
}
