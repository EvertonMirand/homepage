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

  @media (max-width: 768px) {
    .carousel {
      width: 80%;
      height: 80%;

      div {
        flex: 1;

        img {
          width: 80%;
        }
      }
    }
  }
`;

export const Carousel = styled(Slider).attrs({ className: 'carousel' })`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
    background: #eee;
    border-radius: 20px;
    box-shadow: 1px 1px 1px #eeeeda;

    img {
      display: flex;
      height: 80%;
    }
  }
`;
