import React from 'react';

import Styles from './index.module.scss';
import { CarouselBannerProps } from './types';

export const CarouselBanner: React.FC = (props: CarouselBannerProps) => {
  return (
    <div className={Styles.CarouselBanner} />
  );
};
