import { Layout } from 'antd';
import React from 'react';

import Styles from './index.module.scss';
import { BasicHeaderProps } from './types';

export const BasicHeader = (props: BasicHeaderProps) => {
  return (
    <Layout.Header className={Styles.BasicHeader}>
      { props.children }
    </Layout.Header>
  );
};
