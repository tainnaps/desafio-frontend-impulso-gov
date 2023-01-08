import Image from 'next/image';
import logo from '../public/impulsoGov.svg';

export default function ImpulsoGovLogo({ width, height }) {
  return (
    <div
      className='cursor-pointer'
      onClick={ () => console.log('Exibe modal!') }
    >
      <Image
        alt='Impulso Gov Logo'
        src={ logo }
        width={ width }
        height={ height }
      />
    </div>
  );
}
