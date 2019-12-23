import React from 'react';
import { MdSentimentVerySatisfied } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Container, Right, Left, SignIn } from './styles';
import EntrepriseLogo from '../EntrepriseLogo/EntrepriseLogo';
import PhoneWithIcons from '../PhoneWithIcons/PhoneWithIcons';
import FloatingButton from '../FloatingButton';

export default function Header({ links = [] }) {
  const onClickLink = link => {
    const { ref } = link;

    if (ref) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <Left>
        <EntrepriseLogo
          name="Everton Miranda Vitório"
          Logo={() => <MdSentimentVerySatisfied color="#f908" size={35} />}
        />
        <PhoneWithIcons number="+55 61 98127-3203" />
      </Left>
      <Right>
        <div>
          {links.map(link => (
            <button
              type="button"
              key={link.title}
              onClick={() => onClickLink(link)}
            >
              {link.title}
            </button>
          ))}
        </div>
        <SignIn to="/register">Sign Up</SignIn>
      </Right>
    </Container>
  );
}
