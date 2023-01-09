import ImpulsoGovLogo from './ImpulsoGovLogo';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className='w-full bg-blue h-28 flex items-center justify-between px-20'
    >
      <ImpulsoGovLogo
        width={ 80 }
        height={ 80 }
      />

      <Link href='/'>
        <a
          className='text-lg font-bold hover:text-dark-gray transition
          duration-150 ease-in-out'
        >
          HOME
        </a>
      </Link>
    </header>
  );
}
