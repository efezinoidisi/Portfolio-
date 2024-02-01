export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='border-t border-gray/20 p-5 md:pl-20 mt-10'>
      <p className='text-sm md:text-center'>
        &copy;{' '}
        {` copyright ${currentYear}. made by Efezino and design inspired by Elias`}
      </p>
    </footer>
  );
}
