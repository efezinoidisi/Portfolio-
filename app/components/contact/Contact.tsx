import Link from 'next/link';
import ScrollAnimate from '../ScrollAnimate';
import ContactForm from './ContactForm';
import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Heading from '../Heading';

export default function Contact({ page = '' }: { page?: string }) {
  // styles for the contact information links
  const link =
    'flex gap-2 items-center pb-2 hover:text-purple/90 hover:scale-105 hover:underline ease-linear transition-colors duration-200';
  return (
    <ScrollAnimate id='contact' className='flex flex-col'>
      {page && <Heading value='contact-me' />}
      <p className='leading-8  self-center md:self-start md:max-w-full lg:max-w-[60%]'>
        If you require a developer&#39;s expertise or are interested in
        establishing a connection for potential collaboration, please don&#39;t
        hesitate to reach out. Whether it&#39;s about joint projects, shared
        ideas, or simply networking, I&#39;m open to exploring opportunities.
        Let&#39;s connect and see where our paths might lead!
      </p>

      <section className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 w-full py-5 md:py-10'>
        <div className='border-b border-r w-fit px-4 self-center mt-5 py-5 rounded-md shadow-ml'>
          <h3 className='text-white py-3 capitalize text-lg font-bold'>{`contact information`}</h3>

          <Link
            href='mailto:efezinoeidisi@gmail.com'
            className={link}
            target='_blank'
          >
            <HiOutlineMail className={'text-xl'} />
            <span>efezinoeidisi@gmail.com</span>
          </Link>

          <Link
            href='https://wa.me/23408169209097'
            className={link}
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
