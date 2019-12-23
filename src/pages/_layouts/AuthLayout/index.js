import React from 'react';
import PropTypes from 'prop-types';
import { MdSentimentVerySatisfied } from 'react-icons/md';
import { Wrapper, Content } from './styles';
import EntrepriseLogo from '~/components/EntrepriseLogo/EntrepriseLogo';

export default function AuthLayout({ children }) {
  return (
    <>
      <Wrapper>
        <EntrepriseLogo
          name="Everton Miranda Vitório"
          Logo={() => <MdSentimentVerySatisfied color="#f908" size={35} />}
        />
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
