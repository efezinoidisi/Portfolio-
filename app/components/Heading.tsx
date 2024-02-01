type HeadingProps = {
  value: string;
};

export default function Heading({ value }: HeadingProps) {
  return (
    <h2 className='heading mb-9 capitalize font-bold text-xl lg:text-2xl after:content-[""] after:absolute after:-bottom-1 after:border-purple h-fit after:border-b-4 after:w-1/3 md:after:w-1/5 after:left-10 w-full relative text-white'>
      <span className='text-purple'>#</span>
      {value}
    </h2>
  );
}
