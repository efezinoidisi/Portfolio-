import Socials from './nav/Social';

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='border-t p-5 md:pl-20 mt-10'>
      <div className='md:text-center'>
        <p className='text-sm'>
          &copy;{' '}
          {` copyright ${currentYear}. made by Efezino and design inspired by Elias`}
        </p>
      </div>
    </footer>
  );
}
