import ContactMe from '@/app/_components/Contact';
export default function Contact() {
  return (
    <main className='md:ml-16 p-5'>
      <h2 className='uppercase font-mono text-xl mb-7 text-'>contact</h2>
      <ContactMe />

      {/* integrate firebase for public message and show list of available messages */}
    </main>
  );
}
