import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimate from '../ScrollAnimate';
import ContactForm from './ContactForm';
import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact({ page = '' }: { page?: string }) {
  return (
    <ScrollAnimate id='contact' className='flex flex-col'>
      {page && (
        <h2 className='heading mb-9'>
          <span className='text-purple'>#</span>contact-me
        </h2>
      )}
      <p className='leading-8 max-w-2xl self-center md:self-start md:max-w-full'>
        If you require a developer&#39;s expertise or are interested in
        establishing a connection for potential collaboration, please don&#39;t
        hesitate to reach out. Whether it&#39;s about joint projects, shared
        ideas, or simply networking, I&#39;m open to exploring opportunities.
        Let&#39;s connect and see where our paths might lead!
      </p>

      <section className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 w-full py-5 md:py-10'>
        <div className='border w-fit px-4 self-center mt-5 py-5'>
          <h3 className='text-white py-3 capitalize text-lg font-bold'>{`contact information`}</h3>

          <Link
            href='mailto:efezinoeidisi@gmail.com'
            className='flex gap-2 items-center pb-2'
            target='_blank'
          >
            <HiOutlineMail className={'text-xl'} />
            <span>efezinoeidisi@gmail.com</span>
          </Link>

          <Link
            href='https://wa.me/23408169209097'
            className='flex gap-2 items-center'
            target='_blank'
          >
            <FaWhatsapp className={'text-xl'} />
            <span>+23408169209097</span>
          </Link>
        </div>

        <ContactForm />
      </section>
    </ScrollAnimate>
  );
}
