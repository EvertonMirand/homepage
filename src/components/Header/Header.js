import React from 'react';
import { MdSentimentVerySatisfied } from 'react-icons/md';

import { Container } from './styles';
import EntrepriseLogo from '../EntrepriseLogo/EntrepriseLogo';
import PhoneWithIcons from '../PhoneWithIcons/PhoneWithIcons';
import FloatingButton from '../FloatingButton';

const links = [
  {
    title: 'Home',
  },
  {
    title: 'Features',
  },
  {
    title: 'Integration',
  },
  {
    title: 'Testimonial',
  },
  {
    title: 'Contact',
  },
];

export default function Header() {
  return (
    <Container>
      <left>
        <EntrepriseLogo
          name="Everton Miranda Vitório"
          Logo={() => <MdSentimentVerySatisfied color="#f908" size={35} />}
        />
        <PhoneWithIcons number="+55 61 98127-3203" />
      </left>
      <right>
        <div>
          {links.map(link => (
            <button type="button" key={link.title} onClick={() => {}}>
              {link.title}
            </button>
          ))}
        </div>

        <FloatingButton type="button" onClick={() => {}}>
          Sign Up
        </FloatingButton>
      </right>
    </Container>
  );
}
