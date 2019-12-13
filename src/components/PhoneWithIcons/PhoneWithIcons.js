import React from 'react';

import { MdLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function PhoneWithIcons({ number, hasWhatsApp }) {
  return (
    <Container>
      <div>
        {hasWhatsApp && <FaWhatsapp color="#25d366" size={30} />}
        <MdLocalPhone color="#fff" size={30} />
      </div>
      <span>{number}</span>
    </Container>
  );
}

PhoneWithIcons.propTypes = {
  number: PropTypes.string.isRequired,
  hasWhatsApp: PropTypes.bool,
};

PhoneWithIcons.defaultProps = {
  hasWhatsApp: true,
};
