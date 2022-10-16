import { Col, Layout, Row } from 'antd';
import { AspectRatio } from 'components/molecules/AspectRatio';
import { Carousel } from 'components/molecules/Carousel';
import { CarouselBanner } from 'components/molecules/CarouselBanner';
import { BasicFooter } from 'components/molecules/Footer/Basic';
import { BasicHeader } from 'components/molecules/Header/Basic';
import React from 'react';
import { classNames } from 'utils/common';

import Styles from './index.module.scss';

export const HomeTemplate: React.FC = () => {
  return (
    <div
      className={Styles.HomeTemplate}
    >
      <BasicHeader />
      <Layout.Content
        className={classNames(
          Styles.Content
        )}
      >
        <div className={Styles.Container}>
          <Row gutter={16}>
            <Col lg={24}>
              <Carousel>
                <AspectRatio
                  ratio="16/9"
                >
                  <CarouselBanner />
                </AspectRatio>
              </Carousel>
            </Col>
          </Row>
        </div>
      </Layout.Content>
      <BasicFooter />
    </div>
  );
};
