import ContactMe from '@/components/contact/Contact';

export default function ContactPage() {
  return (
    <main className='md:ml-16 p-5'>
      <ContactMe showLine={false} />

      {/* integrate firebase for public message and show list of available messages */}
    </main>
  );
}
