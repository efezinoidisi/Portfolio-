import Socials from './nav/Social';

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='border-t p-5 md:pl-20'>
      <div>
        <h4 className='text-white text-base'>zee</h4>
        <p className='text-purple text-md'>front-end developer</p>
      </div>
      {/* <div>
        <Socials size={10} />
      </div> */}

      <div className='md:text-center'>
        <p>&copy; {` copyright ${currentYear}, coded by Efezino`}</p>
      </div>
    </footer>
  );
}
