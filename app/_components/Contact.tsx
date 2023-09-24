import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from './ScrollAnimate';

export default function Contact({ page = '' }: { page?: string }) {
  return (
    <ScrollAnimate id='contact' className='flex flex-col'>
      {page && (
        <h2 className='heading mb-9'>
          <span className='text-purple'>#</span>contact-me
        </h2>
      )}
      <p className='leading-7 max-w-2xl self-center'>
        If you require a developer&#39;s expertise or are interested in
        establishing a connection for potential collaboration, please don&#39;t
        hesitate to reach out. Whether it&#39;s about joint projects, shared
        ideas, or simply networking, I&#39;m open to exploring opportunities.
        Let&#39;s connect and see where our paths might lead!
      </p>
      <div className='border w-fit p-2 self-center mt-5'>
        <h3 className='text-white py-3'>{`<send me a message>`}</h3>

        <Link
          href='mailto:efezinoeidisi@gmail.com'
          className='flex gap-2 items-center pb-2'
          target='_blank'
        >
          <Image src={'/envelope-regular.svg'} alt='' width={20} height={20} />
          <span>efezinoeidisi@gmail.com</span>
        </Link>

        <Link
          href='https://wa.me/08169209097'
          className='flex gap-2 items-center'
          target='_blank'
        >
          <Image src={'/whatsapp.svg'} alt='' width={20} height={20} />
          <span>+23408169209097</span>
        </Link>
      </div>
    </ScrollAnimate>
  );
}
