import React from 'react';
import { MdSentimentVerySatisfied } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, Right, Left, SignIn } from './styles';
import EntrepriseLogo from '../EntrepriseLogo/EntrepriseLogo';
import PhoneWithIcons from '../PhoneWithIcons/PhoneWithIcons';
import ProfileHeaderContainer from '../ProfileHeaderContainer/ProfileHeaderContainer';

export default function Header({ links = [] }) {
  const user = useSelector(({ user }) => user.profile);
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
        {user ? (
          <ProfileHeaderContainer profile={user} />
        ) : (
          <SignIn to="/login">Sign In</SignIn>
        )}
      </Right>
    </Container>
  );
}
