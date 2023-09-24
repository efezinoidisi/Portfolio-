import errorImg from '@/assets/error.svg';
import Image from 'next/image';

export default function NotFound({}) {
  return (
    <section className='flex flex-col justify-center items-center md:ml-16 p-5'>
      <Image src={errorImg} alt='' width={400} height={400} />
      <h2 className='text-white capitalize py-5 text-lg'>Page not found</h2>
      <p className='max-w-sm text-xs md:text-sm text-center'>
        Oops! You&#39;ve discovered a secret page. Unfortunately, it&#39;s
        locked with a 404 code.
      </p>
    </section>
  );
}
