import Socials from './nav/Social';

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='md:ml-16 p-5'>
      <div>
        <h6>zee</h6>
        <p>front-end developer</p>
      </div>
      <div>
        <Socials size={10} />
      </div>

      <div>
        <p>
          &copy;{' '}
          {` copyright ${currentYear}, designed by Elias and coded by Efezino`}
        </p>
      </div>
    </footer>
  );
}
