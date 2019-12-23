import React, { useRef } from 'react';

import Header from '../../components/Header/Header';
import Content from '../Content/Content.screen';
import CarouselImages from '../CarouselImage/CarouselImages.screen';
import Graphics from '../Graphics/Graphics.screen';
import Jobs from '../Jobs/Jobs.screen';
import Footer from '../../components/Footer/Footer';

export default function Homepage() {
  const contentRef = useRef();
  const carouselRef = useRef();
  const chartRef = useRef();
  const jobsRef = useRef();

  const links = [
    {
      title: 'Conteudo',
      ref: contentRef,
    },
    {
      title: 'Imagens',
      ref: carouselRef,
    },
    {
      title: 'Graficos',
      ref: chartRef,
    },
    {
      title: 'Empregos',
      ref: jobsRef,
    },
  ];
  return (
    <>
      <Header links={links} />
      <Content forwardRef={contentRef} />
      <CarouselImages forwardRef={carouselRef} />
      <Graphics forwardRef={chartRef} />
      <Jobs forwardRef={jobsRef} />
      <Footer />
    </>
  );
}
