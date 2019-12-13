import React from 'react';
import { MdSentimentVerySatisfied, MdLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

import { Container } from './styles';
import EntrepriseLogo from '../EntrepriseLogo/EntrepriseLogo';

const links = ['Home', 'Features', 'Integration', 'Testimonial', 'Contact'];

export default function Header() {
  return (
    <Container>
      <EntrepriseLogo
        name="Everton Miranda Vitório"
        Logo={() => <MdSentimentVerySatisfied color="#f908" size={30} />}
      />

      <MdLocalPhone color="#fff" size={30} />
      <FaWhatsapp color="#25d366" size={30} />
      <span>+55 61 98127-3203</span>
      {links.map(link => (
        <button type="button" key={link} onClick={() => {}}>
          {link}
        </button>
      ))}
      <button type="button" onClick={() => {}}>
        Sign Up
      </button>
    </Container>
  );
}
