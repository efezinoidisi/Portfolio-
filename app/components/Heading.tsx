type HeadingProps = {
  value: string;
  size?: string;
};

export default function Heading({
  value,
  size = 'text-xl lg:text-2xl',
}: HeadingProps) {
  return (
    <h2
      className={`heading mb-9 capitalize font-bold  after:content-[""] after:absolute after:-bottom-1 after:border-purple h-fit after:border-b-4 after:w-1/3 md:after:w-1/5 after:left-10 w-full relative font-ubuntu-mono text-white ${size}`}
    >
      <span className='text-purple'>#</span>
      {value}
    </h2>
  );
}
