import Socials from './Social';

export default function MiniSidebar() {
  return (
    <aside className='hidden md:flex md:flex-col text-white items-end justify-end gap-2 fixed top-0 px-4'>
      <span
        aria-hidden='true'
        className='h-72 w-1/2 border-l border-gray '
      ></span>
      <Socials />
    </aside>
  );
}
