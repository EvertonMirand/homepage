import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
`;

export const Carousel = styled(Slider)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;
