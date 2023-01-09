import Image from 'next/image';
import PropTypes from 'prop-types';
import logo from '../public/impulsoGov.svg';

export default function ImpulsoGovLogo({ width, height }) {
  return (
    <Image
      alt='Impulso Gov Logo'
      src={ logo }
      width={ width }
      height={ height }
    />
  );
}

ImpulsoGovLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}.isRequired;
