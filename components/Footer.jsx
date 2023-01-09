import ImpulsoGovLogo from './ImpulsoGovLogo';

export default function Footer() {
  return (
    <footer className='w-full bg-blue lg:h-28 flex items-center px-10 lg:px-20'>
      <ImpulsoGovLogo
        width={ 80 }
        height={ 80 }
      />
    </footer>
  );
}
