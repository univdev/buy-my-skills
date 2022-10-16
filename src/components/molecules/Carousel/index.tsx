import { Carousel as AntdCarousel } from 'antd';

import { CarouselProps } from './types';

export const Carousel: React.FC = (props: CarouselProps) => {
  return (
    <AntdCarousel
      dotPosition='left'
      { ...props }
    >
      { props.children }
    </AntdCarousel>
  );
};
