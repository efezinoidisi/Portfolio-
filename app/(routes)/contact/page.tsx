import ContactMe from '@/components/contact/Contact';

export default function Contact() {
  return (
    <main className='md:ml-16 p-5'>
      <h1 className='uppercase font-mono text-xl mb-7 text-white'>
        connect with me
      </h1>
      <ContactMe />

      {/* integrate firebase for public message and show list of available messages */}
    </main>
  );
}
