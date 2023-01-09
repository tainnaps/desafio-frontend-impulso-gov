import ImpulsoGovLogo from './ImpulsoGovLogo';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Header({ onLogoClick }) {
  return (
    <header
      className='w-full bg-blue h-28 flex items-center justify-between px-20'
    >
      <button
        className='bg-none'
        onClick={ onLogoClick }
      >
        <ImpulsoGovLogo
          width={ 80 }
          height={ 80 }
        />
      </button>

      <Link href='/'>
        <a
          className='text-lg font-bold font-display hover:text-gray-3 transition
          duration-150 ease-in-out'
        >
          HOME
        </a>
      </Link>
    </header>
  );
}

Header.propTypes = {
  onLogoClick: PropTypes.func
}.isRequired;
